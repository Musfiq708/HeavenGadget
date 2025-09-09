import React from 'react'
import { Link } from 'react-router-dom';

export default function GadgetCard({gadget}) {
    const {product_id,product_title,price,product_image} =gadget;
    
  return (
    <div>
       
          <div className='bg-white p-[20px] h-[380px] rounded-2xl'>
            <img className='mx-auto h-[181px]' src={product_image} alt="" />
            <div className='mt-6'>
              <h1 className='text-2xl font-semibold'>{product_title}</h1>
              <p className='font-medium text-[20px] text-[#09080F99] mt-3 '>Price: {price}$</p>
            </div>
            <Link
            to={
              `/products/${product_id}`
            }
            ><button
            
            className='py-[7px] px-[22px] border-[1.5px] border-[#9538E2] text-[#9538E2] rounded-4xl text-[18px] font-[600] hover:bg-[#9538E2] hover:text-white'>View Details</button>
            </Link>
          </div>
    </div>
  )
}
