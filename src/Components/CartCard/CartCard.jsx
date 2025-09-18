import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { toast } from 'react-toastify';

export default function CartCard({ product, removeFromCart }) {
    const { product_title, price, description, product_id, product_image } = product;

    return (
        <div>
            <div className='bg-white p-8 flex lg:flex-row md:flex-row flex-col items-center gap-8 mb-6 rounded-2xl'>
                <img className='h-[150px]  border-2 border-gray-500 rounded-[12px]' src={product_image} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <h3 className='my-[16px] text-[#09080F99] text-[18px] font-normal'>{description}</h3>
                    <h1 className='text-[20px] font-semibold text-[#09080FCC]'>Price:$ {price}</h1>
                </div>
                <CiCircleRemove
                    onClick={() => {
                        removeFromCart(product_id);
                        toast.warn(`Removed ${product_title} from cart!`, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }}
                    className='lg:ml-auto md:ml-auto text-red-600 hover:text-lime-500 lg:text-5xl text-6xl ' />
            </div>
        </div>
    );
}
