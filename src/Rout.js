import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Contact from './Contact';

function Rout({product, setProduct, detail, view, close, setClose, cart, setCart, addToCart}) {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} />} />
      <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout