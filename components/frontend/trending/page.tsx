import React from "react";
import headset from "@/app/assets/headset.png"; // Assuming this is your correct import path
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

const Trending = () => {
  return (
       <div className="container mx-auto px-4  sm:px-6 md:px-8 md:mt-[0px] mt-auto flex items-center justify-center ">
      <Vortex
         backgroundColor="black"
        className="flex items-center  flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <div className="md:flex md:flex-row flex-col-reverse md:mt-0 mt-20 md:items-center">
          <div className=" w-1/2">
            <div className="">
              <Image
                src={headset}
                alt="headset"
                 width={400}
                height={400}
                 className="rounded-lg w-fit h-fit"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Discover <b className="text-purple-700">Your </b>Sound
            </h1>
            <p className="mt-4 text-lg text-gray-100 leading-relaxed">
              Explore a wide range of headphones and audio accessories.
            </p>
            <button className="mt-6 bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
         </Vortex>

      </div>
   );
};

export default Trending;

 