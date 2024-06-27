import Image, { StaticImageData } from 'next/image';
import React from 'react';
import testimony1 from '@/app/assets/testimony/th1.jpg'
import testimony2 from '@/app/assets/testimony/th2.jpg'
import testimony3 from '@/app/assets/testimony/th3.jpg'
type TestimonyProps = {
  name: string;
  image: StaticImageData;
  quote: string;
};

const Testimony: React.FC<TestimonyProps> = ({ name, image, quote }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
      <Image
        src={image}
        alt={name}
        width={30}
        height={30}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{quote}</p>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonyProps[] = [
    {
      name: 'John Doe',
      image: testimony1,
      quote: 'I love the quality and selection of products on this e-commerce site!',
    },
    {
      name: 'Jane Smith',
      image: testimony2,
      quote: 'The customer service is top-notch, and the shipping is fast and reliable.',
    },
    {
      name: 'Bob Johnson',
      image: testimony3,
      quote: 'I have been a loyal customer for years and highly recommend this e-commerce site to everyone.',
    },
  ];

  return (
    <div className="bg-gray-100 mt-28 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-purple-700 font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimony
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;