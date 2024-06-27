'use client'
import React from 'react'
import CartDetails from './CartDetails'
import { useAppSelector } from '@/redux/Hooks'

 
const CartPage = () => {
    const { items } = useAppSelector(state => state.cart)

 const products = useAppSelector(state=>state.cart)
 const getTotal = ()=>{
    let total = 0;
    products.items.forEach(item=>total = total + item.price *item.quantity)
    return total;
 }

  return <CartDetails />
}

export default CartPage