"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/frontend/product/Card";
import { MyProduct } from "@/types/types";
import Footer from "@/components/Footer/page";
 
const ProductsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<MyProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCart, setShowCart] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get_products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full mb-4  flex flex-col my-20 bg-gray-100 pb-8">
       <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Products</h1>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        {loading ? (
          <div className="flex justify-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer   />

     </div>
  );
};

export default ProductsPage;
