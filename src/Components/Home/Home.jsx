import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  

  return (
    <div>
     <Banner ></Banner> 
       <ToastContainer />
    </div>
  )
}
