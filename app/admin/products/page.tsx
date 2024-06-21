'use client'
import { useState, useEffect } from 'react';
import ProductRows from '@/components/admin/ProductRows';
import { MyProduct } from '@/types/types';
import Link from 'next/link';
import Modal from '@/components/admin/Modal';

const Products = () => {
  const [openPopUp, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [products, setProducts] = useState<MyProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filtered products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch products from the server on component mount or when updateTable changes
  useEffect(() => {
    fetchProducts();
  }, [updateTable]);

  // Fetch products function
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/get_products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      {openPopUp && <Modal setUpdateTable={setUpdateTable} setOpenPopup={setOpenPopup} />}

      <div className="flex justify-end mb-4">
        <Link href="/admin/addProduct"  className="flex w-fit bg-gradient-to-b from-cyan-900 to-cyan-700 text-white px-4 py-3 rounded-xl">
            Add Product
         </Link>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-cyan-800"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <h1 className="text-2xl text-black font-bold mb-4">Product List</h1>
      
      <table className="w-full">
        <thead>
          <tr className="text-lg text-black">
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product: MyProduct, index) => (
            <ProductRows
              key={product._id}
              id={index + 1}
              setOpenPopup={setOpenPopup}
              setUpdateTable={setUpdateTable}
              product={product} // Pass individual product to ProductRows
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
