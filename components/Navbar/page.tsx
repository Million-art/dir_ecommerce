'use client'
import React, { useState } from 'react';
import Link from 'next/link';  
import { UserButton, useUser } from "@clerk/nextjs";
 
const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Products',
      href: '/products'
    },
    {
      label: 'Contact Us',
      href: '/contact'
    },
    {
      label: 'About Us',
      href: '/about'
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   

  return (
    <nav className="bg-black h-fit p-4 sticky top-0  z-10 text-black dark:bg-dark dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref  className="font-bold text-2xl md:text-3xl relative">
            <h1>MUHUR</h1>
          
        </Link>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`bg-black flex-col mt-4 pl-5 py-5 gap-4 md:flex md:flex-row md:mt-0 md:gap-5 ${
            isMenuOpen ? 'flex absolute bg-dark justify-start z-50' : 'hidden'
          } absolute text-white bg-blue mt-96 left-0 right-0 md:bottom-0 md:static`}
        >
          {navItems.map((item, index) => (
            <li key={index} className='list-none'>
              <Link href={item.href} passHref className={`block lg:inline-block hover:text-golden`}>
                  {item.label}
                
              </Link>
            </li>
          ))}

          {isLoaded && !user ? (
            <Link href='/sign-in' passHref className={`text-darkGray hover:text-golden dark:text-white`}>
                Login
             </Link>
          ) : (
            <UserButton afterSignOut='/' />
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
