import React, { useState } from 'react'
import NavBar from './../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Root() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const addProductToCart = (newProduct) => {
    setSelectedProduct(prev => ([...prev, newProduct]));
  }

  const [wishProduct, setWishProduct] = useState([]);
  const addToWishlist = (newProduct) => {

    setWishProduct(prev => ([...prev, newProduct]));
  }

  const [purchasedProducts, setPurchasedProducts] = useState([]);

  
  return (
    <div>
      <NavBar></NavBar>
      <Outlet context={{ selectedProduct, addProductToCart, setSelectedProduct, wishProduct, setWishProduct, addToWishlist, purchasedProducts, setPurchasedProducts }}></Outlet>
      <Footer></Footer>
    </div>
  )
}
