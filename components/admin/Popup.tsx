import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useAppSelector, useDispatch } from '@/redux/Hooks';
import { MyProduct } from '@/types/types'; // Assuming Product type is defined in '@/types/types'
import { makeToast } from '@/util/helper';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {
    const product = useAppSelector((state) => state.product); // Assuming 'product' is correctly selected from Redux state
    const dispatch = useDispatch();

    const [inputData, setInputData] = useState({
        name: product.name,
        imgSrc: product.imgSrc,
        description: product.description,
        category: product.category,
        price: product.price
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        fetch(`/api/edit_product/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        })
        .then(response => {
            if (response.ok) {
                // Handle successful response, e.g., close popup and update table
                setOpenPopup(false);
                setUpdateTable(prev => !prev); // Toggle updateTable state to trigger re-render
                // Optionally dispatch an action to update Redux state
                // dispatch(updateProductSuccess(inputData));
                makeToast('Product updated successfully!')
            } else {
                throw new Error('Failed to update product');
            }
        })
        .catch(error => {
            console.error('Error updating product:', error);
        });
    };

    return (
        <div className="popup">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={inputData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={inputData.category}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={inputData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Popup;
