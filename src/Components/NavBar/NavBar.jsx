import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export default function NavBar() {

  const links = <>
    <li className='text-[16px] lg:text-white font-medium hover:font-bold hover:underline'><a href="">Home</a></li>
    <li className='text-[16px] lg:text-white font-medium hover:font-bold hover:underline'><a href="">Statistics</a></li>
    <li className='text-[16px] lg:text-white font-medium hover:font-bold hover:underline'><a>Dashboard</a></li>
  </>



  return (
    <div className='m-[30px] mb-0'>
      <div className="navbar bg-[#9538E2]  px-[130px] rounded-t-4xl py-3">
        <div className="navbar-start gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <a className=" hover:text-gray-400 text-xl text-white font-[700]">HeavenGadget</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex gap-4 items-center'>
            <div className='bg-white p-2 rounded-full'>
              <IoCartOutline className='text-xl    text-black'/>
            </div>
            <div className='bg-white p-2 rounded-full'>
              <CiHeart className=' text-xl '/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
