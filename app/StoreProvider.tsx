"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { store,persistor } from "@/redux/Store";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
