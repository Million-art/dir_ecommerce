'use client';
import React, { useState, useEffect } from 'react';
import headset from "@/app/assets/headset.png";
import watch from "@/app/assets/watch.png";
import laptop from "@/app/assets/laptop.png";
import phone from "@/app/assets/phone.png";

const Featured = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: { src: string; alt: string }[] = [
    { src: headset.src, alt: 'Headset' },
    { src: watch.src, alt: 'Watch' },
    { src: laptop.src, alt: 'Laptop' },
    { src: phone.src, alt: 'Phone' },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide duration (in milliseconds) here (5000ms = 5 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [images.length]);

  return (
    <div className='bg-base-200 py-10 my-20'>
      <h1 className='text-4xl text-purple-700 font-medium text-center'>Featured Products</h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={images[currentImageIndex].src}
            alt="Featured Product"
            className="max-w-sm rounded-lg ease-in-out"
          />
          <div>
            <h1 className="text-5xl font-bold">All You Need is Here!</h1>
            <p className="py-6">
              Discover the best products that fit your needs. Our featured items are carefully selected to
              provide you with the highest quality and value.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;