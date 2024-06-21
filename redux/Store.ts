'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/CartSlice'; 
import loadingReducer from './features/LoadingSlice'; 
import productReducer from './features/ProductSlice'; 

// Create Redux store using configureStore
export const store = configureStore({
    reducer: {
        // Define reducers for different slices of the state
        // Each slice of the state is managed by its respective reducer
        cart: cartReducer,     // Manage state related to the shopping cart
        loading: loadingReducer,   // Manage state related to loading indicators
        product: productReducer,   // Manage state related to product data
    },
    // Enable Redux DevTools extension in development mode
    devTools: process.env.NODE_ENV !== "production",
});

 
// Define the RootState type to infer the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type to infer the type of the dispatch function
export type AppDispatch = typeof store.dispatch;  
