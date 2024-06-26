import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer  className="bg-purple-700  mt-10  text-white py-8">
      <div className=" mx-auto flex flex-wrap justify-between  items-start p-4">
        {/* About section */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            neque turpis, convallis et dui et, consectetur rutrum libero.
          </p>
        </div>

        {/* Contact form */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full rounded-lg px-4 py-1 sm:py-2 mb-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full rounded-lg px-4 py-1 sm:py-2 mb-2"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full rounded-lg px-4 py-2 mb-2"
            ></textarea>
            <button
              type="submit"
              className="bg-green text-white rounded-lg text-sm  px-4 py-2 border border-white mt-5 text-medium "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social media links */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center md:justify-end">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="mt-8 text-center text-white">
        <p>&copy; 2024 Lovely Footer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
