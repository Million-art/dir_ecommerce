'use client';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/CartSlice';
import productReducer from './features/ProductSlice';
import storage from 'redux-persist/lib/storage';  
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
// Configure Redux Persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Wrap the reducers with the persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);

// Create the Redux store with the persisted reducers
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    product: persistedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Create the persisted store
export const persistor = persistStore(store);

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;