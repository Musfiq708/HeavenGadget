import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';


export default function Dashboard() {
  const  {selectedProduct ,addProductToCart,setWishProduct, addToWishlist,} = useOutletContext();
  const [dashBtn, setDashbtn] = useState(1)
  const dashBoard = (id) => {
    setDashbtn(id);
  }

  
  return (
    <div>
      <div className='bg-[#9538E2] text-center py-[32px]'>
        <h1 className='text-white font-bold text-[32px] mb-4 '>Dashboard</h1>
        <p className='text-white text-[16px] font-normal lg:w-6/10 md:w-10/12 w-10/12 mx-auto mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className=''>
          <button
            onClick={() => dashBoard(1)}
            className='hover:text-[#9538E2] hover:bg-white text-white border border-white rounded-4xl  py-[14px] px-[64px] text-[18px] hover:font-extrabold font-medium mr-6'>Cart</button>
          <button
            onClick={() => dashBoard(2)}
            className='hover:text-[#9538E2] hover:bg-white text-white border border-white rounded-4xl  py-[14px] px-[64px] text-[18px] hover:font-extrabold font-medium '>Wishlist</button>
        </div>
      </div>
      {
        dashBtn == 1?
        <Cart  addProductToCart={addProductToCart}  ></Cart>
        :
        <Wishlist addToWishlist={addToWishlist}></Wishlist>
      }
      
      
    </div>
  )
}

