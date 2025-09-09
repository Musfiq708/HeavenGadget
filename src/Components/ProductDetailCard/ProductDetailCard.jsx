import React, { useEffect, useRef } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";




export default function ProductDetailCard({ AllProducts, productId }) {


    const detailRef = useRef(null);

    useEffect(()=>{
if(detailRef.current)
{
    detailRef.current.scrollIntoView({ behavior: "smooth" });
}
    },[])


    const product = AllProducts.find(item => item.product_id == productId)
    const { product_image, product_title, price, availability, description, Specification, rating } = product;
    return (
        <div>
            <div ref={detailRef} className='flex lg:flex-row md:flex-col flex-col lg:p-8 md:p-8 p-4 lg:w-9/12 md:w-10/12 w-11/12 mx-auto bg bg-white rounded-3xl items-center gap-8 relative top-[-205px]  mb-[-150px] '>
                <div className=' '>
                    <img className='w-[425px] h-full rounded-2xl' src={product_image} alt="" />
                </div>
                <div>
                    <h1 className='text-[28px] font-semibold mb-3'>{product_title}</h1>
                    <p className='text-[20px] font-semibold text-[#09080FCC]'>Price: ${price}</p>
                    {
                        availability?<div className='text-[#309C08] text-[14px] font-medium py-[7px] px-[14px] bg-[#309C081A] my-4 border border-[#309C08] w-23 rounded-full' >In Stock</div>:<div className='text-red-900 text-[14px] font-medium py-[7px] px-[14px] bg-red-400 border border-red-950 my-4 w-30 rounded-full' >Out of Stock</div>
                    }
                    <h3 className='text-[18px] font-normal text-[#09080F99]'>{description}</h3>
                    
                    <ol className='my-4'>
                        <h2 className='text-[18px] font-bold mb-3'>Specification:</h2>
                        {
                            Specification.map((item, index) => (
                                <li className='text-[18px] font-normal text-[#09080F99]' key={index}>{index + 1}.  {item}</li>
                            ))
                        }
                    </ol>
                    <h5 className='text-[18px] font-bold flex items-center gap-2 my-4'>Rating <FaStar className='text-yellow-300' /></h5>
                    <div className='flex items-center gap-4 mb-4'>
                        <div className="rating rating-lg rating-half ">

                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="0.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="1 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="1.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="2 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="2.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="3 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="3.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="4 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="4.5 star" defaultChecked />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="5 star" />
                        </div>
                        <div className='rounded-full py-[7px] px-[14px] bg-[#09080F0D] text-[14px] font-medium'>{rating}</div>
                    </div>
                    <div className='flex items-center gap-4'>
                         <button 
                         className='flex items-center gap-3 text-white font-bold text-[20px] bg-[#9538E2] sm:py-[15px] sm:px-[30px] py-[11px] px-[22px] rounded-[32px] hover:text-white hover:bg-violet-700'
                         >Add To Card <IoCartOutline className='text-3xl text-white    '/></button>
                        <div className='hover:bg-violet-500 bg-white hover:bg-gray-400 border border-gray-800 p-3 rounded-full'>
                            <CiHeart className='hover:text-white  text-4xl text-black' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
