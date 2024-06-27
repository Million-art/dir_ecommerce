import Footer from '@/components/Footer/page';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 w-full h-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-600 mr-4" />
                <p className="text-gray-700">
                  123 Addis Ababa Road, Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-purple-600 mr-4" />
                <p className="text-gray-700">
                  +251 11 123 4567
                </p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-purple-600 mr-4" />
                <p className="text-gray-700">
                  info@dircommerce.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7837500174753!2d38.76415331477449!3d9.005287490163525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab0a01%3A0x78e75eee44ad3eed!2s123%20Addis%20Ababa%20Rd%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1686094520000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;