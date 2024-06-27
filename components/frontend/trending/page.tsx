import React from "react";
import headset from "@/app/assets/headset.png";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-8 md:mt-0 mt-8 flex items-center justify-center">
      <Vortex
        backgroundColor="black"
        className="flex flex-col justify-center h-fit px-2 md:px-10 py-4"
      >
        <div className="md:flex md:flex-row flex-col-reverse justify-center md:mt-0 mt-8 md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={headset}
              alt="headset"
              width={400}
              height={400}
              className="rounded-lg max-w-full  h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight text-center md:text-left">
              Discover <b className="text-purple-700">Your</b> Sound
            </h1>
            <p className="mt-4 text-lg text-gray-100 leading-relaxed text-center md:text-left">
              Explore a wide range of headphones and audio accessories.
            </p>
            <Link href="/products">
              <button className="mt-6 bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Trending;
