import React, { FormEvent, useState } from 'react';
import { useAppSelector, useDispatch } from '@/redux/Hooks';
import toast from 'react-hot-toast';

interface PropsTypes {
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<PropsTypes> = ({ setOpenPopup, setUpdateTable }) => {
  const productData = useAppSelector((state) => state.product);
  const [name, setName] = useState(productData.name || '');
  const [category, setCategory] = useState(productData.category || '');
  const [description, setDescription] = useState(productData.description || '');
  const [price, setPrice] = useState(productData.price || 0);
  const [loading, setLoading] = useState(false);

  // Update local state when productData changes
  React.useEffect(() => {
    setName(productData.name || '');
    setCategory(productData.category || '');
    setDescription(productData.description || '');
    setPrice(productData.price || 0);
  }, [productData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(Number(value)); // Ensure to parse value as a number for price
        break;
      default:
        break;
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const editedProduct = {
      name,
      category,
      description,
      price,
    };

    try {
      const res = await fetch(`/api/edit_product/${productData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });
    
      if (res.ok) {
        toast.success('Product edited successfully!');
        setUpdateTable((prev) => !prev);
        setOpenPopup(false);
        // Optionally reset form fields here if needed
      } else {
        const errorData = await res.json();
        setLoading(false);
        toast.error('Product edit not successfully!');

        throw new Error(`Failed to edit product: ${errorData.message}`);
      }
    } catch (error) {
 
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <span
          className="top-2 right-2 text-2xl flex justify-end text-red-500 hover:red-gray-700 cursor-pointer"
          onClick={() => setOpenPopup(false)}
        >
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="phone">Phone</option>
              <option value="watch">Watch</option>
              <option value="laptop">Laptop</option>
              <option value="headset">Headset</option>
            </select>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleInputChange}
              required
            />
          </label>
          <button
            type="submit"
            className="mt-10 w-full bg-cyan-700 rounded-xl hover:bg-cyan-800 py-2 px-4 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner w-4 text-white h-4"></span>
            ) : (
              'Save'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
