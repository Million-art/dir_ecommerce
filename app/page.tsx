import React from 'react';
 import Navbar from '@/components/Navbar/page';
 import Home from './home/page'
import Providers from './StoreProvider';

interface HomeProps {
  children: React.ReactNode;
}

const index: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <Home />
      <Providers >
        {children}
      </Providers>
    </div>
  );
};

export default index;
