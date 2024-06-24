import React from "react";
import headset from "@/app/assets/headset.png"; // Assuming this is your correct import path
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

const Hero = () => {
  return (
       <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center -z-10">
      <Vortex
         backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src={headset}
                alt="headset"
                layout="responsive"
                width={400}
                height={400}
                objectFit="contain"
                className="rounded-lg -z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover <b className="text-purple-700">Your</b>Sound
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

export default Hero;


// import React from "react";
// import { Vortex } from "../ui/vortex";

// export function VortexDemo() {
//   return (
//     <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The hell is this?
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//           burned and you&apos;ll have a scar.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2  text-white ">Watch trailer</button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }
