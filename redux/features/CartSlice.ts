'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/types';

interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      const idToRemove = action.payload._id;
      const itemToRemove = state.items.find(item => item._id === idToRemove);
      if (itemToRemove) {
        state.items = state.items.filter(item => item._id !== idToRemove);
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemToIncrement = state.items.find(item => item._id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.quantity++;
        state.totalPrice += itemToIncrement.price;
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemToDecrement = state.items.find(item => item._id === action.payload);
      if (itemToDecrement) {
        if (itemToDecrement.quantity > 1) {
          itemToDecrement.quantity--;
          state.totalPrice -= itemToDecrement.price;
        }
      }
    },

    clearCart: state => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;