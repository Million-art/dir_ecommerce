"use client";
import React, { useState } from "react";
import { MyProduct, Product } from "@/types/types";
import CardSkeleton from "./CardSkeleton";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/CartSlice";
  

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleProductClick = () => {
    router.push(`/products/${product._id}`);
  };
 
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    console.log(product._id);
  };
  return (
    <div className="border p-4 rounded shadow-2xl w-full max-w-[500px] transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative overflow-hidden rounded-lg h-64">
        {!imageLoaded && <CardSkeleton />}
        <CldImage
          src={product.imgSrc}
          alt={product.name}
          width={600}
          height={800}
          className={`absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          onClick={handleProductClick}
        />
      </div>
      <div
        className={`flex flex-col justify-between h-full ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-sm pb-2">${product.price} Birr</p>
          <button 
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleAddToCart(product)}
            >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
