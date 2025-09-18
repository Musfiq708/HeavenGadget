import React, { useEffect, useState } from 'react'
import ProductDetailsBanner from './../ProductDetailsBanner/ProductDetailsBanner';
import { useLoaderData, useLocation, useOutletContext, useParams } from 'react-router-dom';
import ProductDetailCard from '../ProductDetailCard/ProductDetailCard';

export default function ProductsDetails() {
const { productId } = useParams();
const location = useLocation().pathname;

const {addProductToCart }= useOutletContext();

useEffect(()=>{
  
    document.title = "Products | HeavenGadget";
},[location])
const AllProducts = useLoaderData();

  return (
    <div>
      <ProductDetailsBanner ></ProductDetailsBanner>
       
          <ProductDetailCard 
        addProductToCart={addProductToCart}
            AllProducts={AllProducts}
            productId={productId} 
            
          />
        
      
    </div>
  )
}
