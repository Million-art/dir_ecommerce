import React from 'react';
import Navbar from '@/components/Navbar/page';
import Home from './home/page';
import Providers from './StoreProvider';

const Index: React.FC = ({ children }:any) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Home />
      <Providers>{children}</Providers>
    </div>
  );
};

export default Index;