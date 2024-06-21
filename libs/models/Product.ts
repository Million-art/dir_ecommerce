// models/Product.js
import { MyProduct } from '@/types/types';
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    imgSrc: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

let Product;
try {
    Product = model<MyProduct>('Product');
} catch (error) {
    Product = model<MyProduct>('Product', productSchema);
}

export default Product as typeof Product & (new () => MyProduct);
