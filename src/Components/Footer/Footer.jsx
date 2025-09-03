import React from 'react'

export default function Footer() {
  return (
    <div className='text-center bg-white lg:py-[100px] md:py-[100px] py-[50px]'>
      <div className='lg:w-6/10 md:w-10/12 mx-auto'>
        <h1 className='font-bold text-[32px] text-black mb-3'>Heaven Gadget</h1>
        <p className='text-[16px] text-[#09080F99] font-normal'>Leading the way in cutting-edge technology and innovation.</p>
        <hr className='border-gray-400 my-8' />
        <div className='flex lg:gap-[166px] md:gap-[150px] justify-around lg:flex-row md:flex-row flex-col gap-5'>
          <div>
            <h1 className='text-[18px] font-bold text-black mb-4'>Services</h1>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Product Support</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Order Tracking</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Shipping & Delivery</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Returns</p>
          </div>
          <div>
            <h1 className='text-[18px] font-bold text-black mb-4'>Company</h1>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>About Us</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Careers</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Contact</p>

          </div>
          <div>
            <h1 className='text-[18px] font-bold text-black mb-4'>Legal</h1>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Terms of Service</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Privacy Policy</p>
            <p className='text-[16px] text-[#09080F99] font-normal mb-2'>Cookie Policy</p>

          </div>
        </div>
      </div>
    </div>
  )
}
