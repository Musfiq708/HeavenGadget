import React, { useEffect, useState } from 'react'
import GadgetCard from '../GadgetCard/GadgetCard';

export default function Gadgets({addProductToCart}) {

    const [displayed, setallDisplay] = useState([])
    const [gadgets, setgadgets] = useState(displayed)

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setgadgets(data);
                setallDisplay(data);
            })
    }, [])

    const allProductsCpy = () => {
        setgadgets(displayed);
    }

    const sortLaptop = (cate) => {
        if (!cate) {
            setgadgets(displayed);
        } else {
            const sortedLaptops = displayed.filter((p) => p.category === cate);
            setgadgets(sortedLaptops);
        }
    }
    

    return (
        <div className='lg:w-10/12 w-11/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-[40px] font-bold mb-12'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex gap-6 lg:flex-row md:flex-col '>
                <div className='bg-white  lg:w-1/5 p-6  rounded-2xl flex lg:flex-col md:flex-row flex-col  lg:gap-6 gap-3'>
                    <button
                        onClick={allProductsCpy}
                        className='bg-[#F6F6F6] lg:py-[13px] md:py-[2px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>All Product</button>
                    <button
                        onClick={() => sortLaptop("Laptop")}
                        className='bg-[#F6F6F6] py-[13px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>Laptops</button>
                    <button
                        onClick={() => sortLaptop("Branded Phone")}
                        className='bg-[#F6F6F6] py-[13px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>Phones</button>
                    <button
                        onClick={() => sortLaptop("Accessories")}
                        className='bg-[#F6F6F6] py-[13px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>Accessories</button>
                    <button
                        onClick={() => sortLaptop("Smart Watches")}
                        className='bg-[#F6F6F6] py-[13px] p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>Smart Watches</button>
                    <button
                        onClick={() => sortLaptop("MacBook")}
                        className='bg-[#F6F6F6] py-[13px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>MacBook</button>
                    <button
                        onClick={() => sortLaptop("iPhone")}
                        className='bg-[#F6F6F6] py-[13px]  p-2 lg:text-[18px] text-[10px] text-[#09080F99] font-[500] hover:font-[800] hover:text-white hover:bg-[#9538E2] w-full rounded-4xl'>Iphone</button>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mb-10'>
                    {
                        gadgets.length !== 0 ? gadgets.map(gadget => <GadgetCard addProductToCart={addProductToCart} gadget={gadget} key={gadget.product_id}></GadgetCard>) : <div className='text-center my-[100px] ml-[100px] w-full'>
                    <h1 className='text-2xl font-extrabold '>Product is not Available <span className='text-red-500'>Now!!!</span></h1>
                </div>
                    }
                </div>
                
            </div>
        </div>
    )
}