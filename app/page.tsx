'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/page';
import Home from './home/page';
import Providers from './StoreProvider';

const Index: React.FC = ({children}:any) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="h-full w-full">
      <Navbar setShowCart={setShowCart} />
      <Home />
      <Providers>{children}</Providers>
    </div>
  );
};

export default Index;