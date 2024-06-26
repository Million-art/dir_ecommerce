import React from 'react'
import Image from 'next/image'

import headset from "@/app/assets/headset.png";
import watch from "@/app/assets/watch.png";
import laptop from "@/app/assets/laptop.png";
import phone from "@/app/assets/phone.png";

const Category = () => {
  return (
    <div className="py-12 px-4 mt-20 mb-20 sm:px-6 lg:px-8">
        <h1 className='mb-5 text-4xl  text-center text-purple-700 font-medium'>Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Headset Category */}
        <div className="bg-base-200 shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-48 group">
            <Image
              src={headset}
              alt="Headset"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl  mb-2">Headsets</h3>
            <p className="text-gray-500 mb-4">Immersive audio for gaming and entertainment.</p>
            <a href="#" className="text-purple-700 hover:text-purple-900 font-semibold">
              Shop Headsets
            </a>
          </div>
        </div>

        {/* Laptop Category */}
        <div className="bg-base-200 shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-48 group">
            <Image
              src={laptop}
              alt="Laptop"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl  mb-2">Laptops</h3>
            <p className="text-gray-500 mb-4">Power your productivity with our laptop collection.</p>
            <a href="#" className="text-purple-700 hover:text-purple-900 font-semibold">
              Shop Laptops
            </a>
          </div>
        </div>

        {/* Watch Category */}
        <div className="bg-base-200 shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-48 group">
            <Image
              src={watch}
              alt="Watch"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl  mb-2">Watches</h3>
            <p className="text-gray-500 mb-4">Stay connected with our stylish and smart watches.</p>
            <a href="#" className="text-purple-700 hover:text-purple-900 font-semibold">
              Shop Watches
            </a>
          </div>
        </div>

        {/* Phone Category */}
        <div className="bg-base-200 shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-48 group">
            <Image
              src={phone}
              alt="Phone"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl  mb-2">Phones</h3>
            <p className="text-gray-500 mb-4">Stay connected with our latest smartphones.</p>
            <a href="#" className="text-purple-700 hover:text-purple-900 font-semibold">
              Shop Phones
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category