"use client";
import CardSkeleton from "@/components/frontend/product/CardSkeleton";
import Navbar from "@/components/Navbar/page";
import { MyProduct } from "@/types/types";
import { CldImage } from "next-cloudinary";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
  
const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<MyProduct | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
 
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/get_products_by_id/${id}`);
        const data = await response.json();
        setProduct(data);

        
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

 
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-purple-700 w-16 h-16"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
          {!imageLoaded && <CardSkeleton />}
          <CldImage
            src={product.imgSrc}
            alt={product.name}
            width={600}
            height={800}
            className={`${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold">{product.name}</h1>
           <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-lg font-bold">Price: ${product.price}</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default ProductDetailsPage;