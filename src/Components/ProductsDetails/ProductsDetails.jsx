import React, { useEffect, useState } from 'react'
import ProductDetailsBanner from './../ProductDetailsBanner/ProductDetailsBanner';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import ProductDetailCard from '../ProductDetailCard/ProductDetailCard';

export default function ProductsDetails() {
const { productId } = useParams();
const location = useLocation().pathname;

useEffect(()=>{
  if(location === "/products/6")
  {
    document.title = "Products | HeavenGadget"
  }
  
  
},[location])
const AllProducts = useLoaderData();

  return (
    <div>
      <ProductDetailsBanner ></ProductDetailsBanner>
       
          <ProductDetailCard 
            AllProducts={AllProducts}
            productId={productId} 
            
          />
        
      
    </div>
  )
}
