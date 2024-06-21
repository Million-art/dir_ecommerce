'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faUsers, faCog, faUser, faChartBar, faListAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="sidebar w-64 h-screen flex flex-col bg-gradient-to-b from-cyan-900 to-cyan-700 text-white">
      <div className="sidebar-logo text-2xl font-bold py-4 text-center">Your Logo</div>

      <div className="flex-1 overflow-y-auto">
        <ul className="sidebar-nav">
          <li>
            <Link href="/admin/dashboard"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faHome} className="mr-2 w-5 h-5" />
                <span>Dashboard</span>
             </Link>
          </li>
          <li>
            <Link href="/orders"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2 w-5 h-5" />
                <span>Orders</span>
             </Link>
          </li>
          <li>
            <Link href="/customers"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faUsers} className="mr-2 w-5 h-5" />
                <span>Customers</span>
             </Link>
          </li>
          <li>
            <Link href="/admin/products"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faListAlt} className="mr-2 w-5 h-5" />
                <span>Products</span>
             </Link>
          </li>
          <li>
            <Link href="/transactions"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 w-5 h-5" />
                <span>Transactions</span>
             </Link>
          </li>
          <li>
            <Link href="/analytics"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faChartBar} className="mr-2 w-5 h-5" />
                <span>Analytics</span>
             </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="mt-auto">
          <li>
            <Link href="/settings"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faCog} className="mr-2 w-5 h-5" />
                <span>Settings</span>
             </Link>
          </li>
          <li>
            <Link href="/profile"className="sidebar-link flex items-center py-3 px-4 text-gray-200 hover:text-white hover:bg-cyan-800 hover:shadow-lg rounded-full transition-colors duration-300">
                <FontAwesomeIcon icon={faUser} className="mr-2 w-5 h-5" />
                <span>Profile</span>
             </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
