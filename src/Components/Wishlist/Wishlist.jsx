import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import WishCard from '../WishCard/WishCard';

export default function Wishlist() {

  const { setWishProduct, wishProduct } = useOutletContext();
  const [Wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('./fakedata.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => wishProduct.includes(item.product_id));
        setWishlist(filtered)
      });
  }, [wishProduct])


  const removeFromWishList = (id) => {
    setWishProduct(prev => prev.filter(productId => productId !== id))
  };

  return (
    <div className='lg:w-10/12 w-11/12 mx-auto pt-[48px] mb-[100px]'>
      <h1 className='text-2xl font-bold'>WishList</h1>
      <div>
        {
          Wishlist.length > 0 ?Wishlist.map(product => (
            <WishCard
              key={product.product_id}
              product={product}
              removeFromWishList={removeFromWishList}
            ></WishCard>)):<div className='text-center text-4xl font-extrabold'>Wishlist is <span className='text-red-600'>Empty</span></div>
          
        }
      </div>
    </div>
  )
}
