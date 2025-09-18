import React, { useEffect, useState } from 'react'
import CartCard from '../CartCard/CartCard'
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IoOptionsOutline } from "react-icons/io5";
import ticklogo from '../../assets/Group.png'

export default function Cart() {
  const { selectedProduct, setSelectedProduct, setPurchasedProducts } = useOutletContext();
  const [productList, setProductList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    fetch('./fakedata.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => selectedProduct.includes(item.product_id));
        setProductList(filtered);
      });
  }, [selectedProduct]);

  const removeFromCart = (id) => {
    setSelectedProduct(prev => prev.filter(productId => productId !== id));
  };

  const totalPrice = productList.reduce((sum, product) => sum + product.price, 0);

  const handlesort = (sortType) => {
    if (sortType === 'Price') {
      const sortList = [...productList].sort((a, b) => b.price - a.price);
      setProductList(sortList);
    }
    if (sortType === 'Rating') {
      const sortList = [...productList].sort((a, b) => a.rating - b.rating);
      setProductList(sortList);
    }
  }

  const handlePurchase = () => {
    setPurchasedProducts(productList);
    setSelectedProduct([]);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  return (
    <div className='lg:w-10/12 w-11/12 mx-auto pt-[48px] mb-[100px]'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold '>Cart</h1>
        <div className='flex gap-3 items-center'>
          <h1 className='text-2xl font-bold'>Total Cost : $ {totalPrice.toFixed(2)}</h1>
          <div className='flex gap-4 items-center'>
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn text-[#9538E2] text-[18px] font-semibold py-[25px] px-[22px] rounded-4xl border-2 border-[#9538E2]">
                Sort by<IoOptionsOutline className='ml-[10px] text-2xl' />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={() => handlesort('Price')}><a>Sort by Price</a></li>
                <li onClick={() => handlesort('Rating')}><a>Sort by Rating</a></li>
              </ul>
            </div>
            <button
              onClick={handlePurchase}
              disabled={productList.length === 0}
              className={`rounded-4xl py-[13px] px-[26px] text-[18px] font-medium 
                ${productList.length === 0
                  ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                  : 'bg-[#9538E2] text-white hover:bg-white hover:border-2 hover:border-[#9538E2] hover:text-black hover:font-bold'}`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className='mt-[34px]'>
        {
          selectedProduct.length > 0 ? productList.map(product => (
            <CartCard
              key={product.product_id}
              product={product}
              removeFromCart={removeFromCart}
            />
          )) : <div className='text-center text-4xl font-extrabold'>Cart is <span className='text-red-600'>Empty</span></div>
        }
      </div>

      
      {isModalOpen && (
        <div
          className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box bg-white rounded-xl max-w-md mx-auto p-8">
            <div className='text-center'>
              <img className='mx-auto mb-6' src={ticklogo} alt="" />
              <h1 className='text-2xl font-bold'>Payment Successfully</h1>
              <p className='my-6 text-[16px] font-medium text-[#09080F99]'>Thanks for purchasing.</p>
              <p className='text-[16px] font-medium text-[#09080F99]'>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="modal-action flex justify-center ">
              <button
                onClick={closeModal}
                className="btn bg-gray-300 text-black rounded-3xl px-6 py-2 hover:bg-[#7a2fc1] hover:text-white text-center w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
