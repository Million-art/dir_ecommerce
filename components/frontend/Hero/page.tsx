import React from "react";
import banner from "@/app/assets/banner2.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Image
        src={banner}
        alt="headset"
        fill
        className="  inset-0 object-cover"
      />
      <div className="  inset-0 bg-black/50" />
      <div className="relative  max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          Welcome to Dir Commerce
           
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 animate-fade-in-up">
          Elevate your electronics experience with our cutting-edge solutions.
        </p>
        <Link  href='products' className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-5 md:text-xl rounded animate-pulse">
           Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;