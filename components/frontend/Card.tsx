'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MyProduct } from '@/types/types';
import CardSkeleton from './CardSkeleton';
import { CldImage } from 'next-cloudinary';

interface CardProps {
  product: MyProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  
  
    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border p-4 rounded shadow-2xl w-full max-w-[500px] transition duration-300 ease-in-out transform hover:scale-105">
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          <div className="mb-4 relative overflow-hidden rounded-lg h-64 hover:shadow-lg" >
            <CldImage
              src={product.imgSrc}
              alt={product.name}
              width={600}
              height={800}
              className="absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
              
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-sm pb-2">${product.price} Birr</p>
              <button className="bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Add To Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
