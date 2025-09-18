import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useOutletContext } from 'react-router-dom';
export default function WishCard({ product, removeFromWishList }) {

    const{addProductToCart} = useOutletContext();
    const { product_title, price, description, product_id, product_image } = product;

    return (
        <div>
            <div className='bg-white p-8 flex lg:flex-row md:flex-row flex-col items-center gap-8 mb-6 rounded-2xl'>
                <img className='h-[190px]  border-2 border-gray-500 rounded-[12px]' src={product_image} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <h3 className='my-[16px] text-[#09080F99] text-[18px] font-normal'>{description}</h3>
                    <h1 className='text-[20px] font-semibold text-[#09080FCC]'>Price:$ {price}</h1>
                    <button
                        onClick={() => {
                            removeFromWishList(product_id),
                            addProductToCart(product_id)
                        }}
                        className='py-[13px] px-[26px] text-white hover:text-black bg-[#9538E2] hover:bg-white hover:border-2 hover:border-[#9538E2] rounded-4xl font-[500] hover:font-extrabold mt-4'>Add to Cart</button>
                </div>
                < CiCircleRemove
                    onClick={() => removeFromWishList(product_id)}
                    className='lg:ml-auto md:ml-auto text-red-600 hover:text-lime-500 lg:text-5xl text-6xl ' />
            </div>
        </div>
    )
}
