'use client'
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/Store';

interface ProvidersProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<ProvidersProps> = ({ children }) => {
  const storeRef = useRef<typeof store | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  );
};

export default StoreProvider;