import React from 'react';
 import Navbar from '@/components/Navbar/page';
import Providers from './StoreProvider';

interface HomeProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <Providers >
        {children}
      </Providers>
    </div>
  );
};

export default Home;
