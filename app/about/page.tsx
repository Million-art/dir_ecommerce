import React from 'react';
import Image from 'next/image';
import aboutImage from '@/app/assets/dir.png';
import Footer from '@/components/Footer/page';

const About = () => {
  return (
    <div className="pt-10 w-full h-full   ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Dir Commerce
              </h2>
              <p className="text-gray-700 mb-6">
                At Dir Commerce, we are passionate about providing our customers with the best
                possible electronics shopping experience. Our mission is to curate a diverse
                selection of high-quality products and offer exceptional customer service to
                help you find the perfect items for your needs.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2018, Dir Commerce has quickly become a leading ecommerce
                destination for electronics enthusiasts. We pride ourselves on our
                knowledgeable and friendly team, who are dedicated to helping you navigate
                our wide range of products and find the perfect fit.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're in the market for the latest smartphones, laptops, home
                appliances, or cutting-edge gadgets, you can trust that Dir Commerce will
                provide you with a seamless and enjoyable shopping experience.
              </p>
            </div>
          </div>
          <div className='flex justify-center  items-center'>
            <Image
              src={aboutImage}
              alt="About Dir Commerce"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;