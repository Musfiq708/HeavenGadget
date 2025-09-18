import React, { useEffect, useState } from 'react'

export default function HistoryList({ producto }) {

    const { product_title, price } = producto;
    

    
    return (
        <div className='mb-5'>
            <div className='flex lg:flex-row flex-col lg:gap-50 md:gap-5 gap-5 lg:justify-around text-2xl font-bold mb-5 text-center  lg:text-left md:text-center'>
                <h1 className=''>{product_title}</h1>

                <p className=''>Price: {price}$</p>
            </div>
            <h1 className='text-center text-xl font-semibold text-green-600'>!!!Succesfully Purchased!!!</h1>
        </div>
    )
}
