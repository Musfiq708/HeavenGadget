import React, { useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar() {

  const location = useLocation().pathname;

useEffect(()=>{
  if(location === "/")
  {
    document.title = "Home | HeavenGadget"
  }
  if(location === "/dashboard")
  {
    document.title = "Dashboard | HeavenGadget"
  }
  if(location === "/statistics")
  {
    document.title = "Statistics | HeavenGadget"
  }
  if(location === "/history")
  {
    document.title = "History | HeavenGadget"
  }
  
},[location])
  

  const links = <>
    <li className={`${location === "/" ? "lg:text-white" : "lg:text-black" } text-[16px]  font-medium hover:font-bold hover:underline`}><NavLink to="/">Home</NavLink></li>
    <li className={`${location === "/" ? "lg:text-white" : "lg:text-black" } text-[16px]  font-medium hover:font-bold hover:underline`}><NavLink to="statistics">Statistics</NavLink></li>
    <li className={`${location === "/" ? "lg:text-white" : "lg:text-black" } text-[16px]  font-medium  hover:font-bold hover:underline`}><NavLink to="dashboard">Dashboard</NavLink></li>
    <li className={`${location === "/" ? "lg:text-white" : "lg:text-black" } text-[16px]  font-medium  hover:font-bold hover:underline`}><NavLink to="history">History</NavLink></li>
  </>



  return (
    <div className='lg:mx-[30px] md:mx-[30px] mx-[15px] pt-[15px] mb-0'>
      <div className={`navbar ${location === "/" ? "bg-[#9538E2]" : "bg-[#F6F6F6]" }  lg:px-[130px]  md:px-[80px] px-[30px] rounded-t-4xl py-3`}>
        <div className="navbar-start md:gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-5 lg:hidden text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className={`${location === "/" ? "text-white" : "text-black" } h-7 w-7  hover:text-violet-800`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <a className={`${location === "/" ? "text-white hover:text-gray-400" : "text-black hover:text-violet-500" }  text-xl  font-[700]`}>HeavenGadget</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex lg:gap-4 md:gap-4 gap-2 items-center'>
            <div className='bg-white p-2 rounded-full hover:bg-violet-500 '>
              <IoCartOutline className='text-xl hover:text-white   text-black '/>
            </div>
            <div className='hover:bg-violet-500 bg-white p-2 rounded-full'>
              <CiHeart className='hover:text-white  text-xl text-black'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
