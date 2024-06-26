'use client'
import Navbar from '@/components/Navbar/page'
import React, { useState } from 'react'

const Header = () => {
    const [showCart, setShowCart] = useState(false);

  return (
    <div>
        <Navbar setShowCart={setShowCart} /> 

    </div>
  )
}

export default Header;