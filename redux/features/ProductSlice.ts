 
import { MyProduct } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MyProduct = {
    _id: "",
    imgSrc: "",
    name: "",
    description:"",
    price: 0,
    category: ""
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<MyProduct>) => {
            return action.payload;
        },
        clearProduct: (state) => {
            return initialState;
        }
    }
});

export const { setProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;
