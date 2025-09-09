import React, { useRef } from 'react'
import ban from '../../assets/banner.jpg'
import Gadgets from '../Gadgets/Gadgets'
export default function Banner() {

    const gadgetRef = useRef(null);
document.title = "Home | HeavenGadget"
    const handlescroll = () => {
        if (gadgetRef.current) {
            gadgetRef.current.scrollIntoView({ behavior: "smooth" });
        }

    };

    return (
        <div>
            <div className='bg-[#9538E2] lg:mx-[30px] md:mx-[30px] mx-[15px] lg:pb-[268px] md:pb-[200px] pb-[150px] text-center rounded-b-[32px]'>
                <h1 className='lg:text-[56px] md:text-[56px] text-[30px] text-white font-bold   lg:px-[100px] px-[20px] pt-10 mb-6'>Upgrade Your Tech Accessorize with Heaven Gadget Accessories</h1>
                <p className='text-white sm:text-[16px] text-[14px] font-normal lg:px-[200px] md:px-[80px] px-[30px] lg:mb-8 md:mb-5 mb-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button
                onClick={handlescroll}
                className='text-[#9538E2] font-bold text-[20px] bg-white sm:py-[15px] sm:px-[30px] py-[10px] px-[20px] rounded-[32px] hover:text-white hover:bg-violet-700'>
                    Shop Now
                </button>
            </div>
            <div className='lg:w-8/12 md:w-9/12 w-10/12 mx-auto lg:p-6 md:p-6 p-2 border-[3px] border-white bg-[#FFFFFF4D] relative lg:top-[-230px] md:top-[-180px] top-[-130px] rounded-[32px] mb-[-100px] '>
                <img className='rounded-[32px]' src={ban} alt="" />
            </div>
            <div ref={gadgetRef}>
                <Gadgets ></Gadgets>
            </div>
        </div>

    )
}
