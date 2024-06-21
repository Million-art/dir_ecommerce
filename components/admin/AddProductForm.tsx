'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import toast from 'react-hot-toast';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState(''); // State for category
    const [productImage, setProductImage] = useState<File | null>(null); // State for image file
    const [loading, setLoading]= useState<boolean>(false)
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            if (file.size > 4 * 1024 * 1024) {
                alert('Image size exceeds 4 MB. Please choose a smaller image.');
                e.target.value = ''; // Reset input file to clear selected file
            } else {
                setProductImage(file);
            }
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)
        // Ensure a category is selected
        if (!productCategory) {
            alert('Please select a category.');
            return;
        }

        const uploadImageToCloudinary = async (imageFile: File): Promise<string> => {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('upload_preset', 'ecommerce');
    
            const response = await fetch('https://api.cloudinary.com/v1_1/dd6sildog/image/upload', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                const data = await response.json();
                 return data.secure_url;
            } else {
                toast.error('product not added successfully!');
                setLoading(false)
                throw new Error('Failed to upload image to Cloudinary');

            }
        };

        // Prepare data to send to the server
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', parseFloat(productPrice).toString());
        formData.append('description', productDescription);
        formData.append('category', productCategory);
      
        // Upload the image to Cloudinary
        const cloudinaryUrl = await uploadImageToCloudinary(productImage!);
        formData.append('imgSrc', cloudinaryUrl);
          try {
            // Send data to your server API endpoint (assuming '/api/add_product' for example)
            const response = await fetch('/api/add_product', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                toast.success('Product added successfully!');
                setLoading(false);
                setProductName('');
                setProductPrice('');
                setProductDescription('');
                setProductCategory('');
                setProductImage(null);
            } else {
                // Handle errors from server
                console.error('Failed to add product:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="container mx-auto my-8 px-4">
            <h1 className="text-2xl text-black font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block mb-1 text-black">Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className=" "
                        required
                        placeholder='Iphone'
                    />
                </div>
                <div>
                    <label className="block mb-1 text-black">Price:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        step="0.01"
                        className=" "
                        required
                        placeholder='200'
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-1 text-black">Description:</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className=" "
                        rows={4}
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block mb-1 text-black">Category:</label>
                    <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className=" "
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="phone">Phone</option>
                        <option value="watch">Watch</option>
                        <option value="headset">Headset</option>
                        <option value="laptop">Laptop</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-black">Image:</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className=" "
                        accept="image/*"
                        required
                    />
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      {loading?<span className="loading loading-spinner text-primary w-5 h-5"></span>: 'Add Product'} 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
