'use client'
import { useAppSelector } from '@/redux/Hooks';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';

interface NavbarProps {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setShowCart }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useAppSelector(state => state.cart.items);
  const cartCount = cartItems.length;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-purple-500 h-fit px-4 py-2 sticky top-0 mb-0 z-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl flex md:text-3xl relative">
          <h1><b className='text-white'>DIR COMMERCE</b></h1>
        </Link>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          className={`flex-col mt-4 pl-5 py-5 gap-4 md:flex md:flex-row md:mt-0 md:gap-5 ${
            isMenuOpen ? 'bg-black flex absolute bg-dark justify-start z-100' : 'hidden'
          } absolute text-white bg-blue mt-96 left-0 right-0 md:bottom-0 md:static`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="list-none">
              <Link href={item.href} className="block lg:inline-block font-medium hover:text-yellow-500">
                {item.label}
              </Link>
            </li>
          ))}

          <div className="text-white text-[32px] relative cursor-pointer" onClick={handleCartClick}>
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] text-sm bg-green-500 rounded-full h-fit px-2">{cartCount}</div>
          </div>

          {isLoaded && !user ? (
            <Link href="/sign-in" className="text-darkGray hover:text-golden dark:text-white">
              Login
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;