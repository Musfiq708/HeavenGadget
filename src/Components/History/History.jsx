import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import HistoryList from '../HistoryList/HistoryList';

export default function History() {
    const { purchasedProducts } = useOutletContext();
    const [storedPurchasedProducts, setStoredPurchasedProducts] = useState([]);
;
    useEffect(() => {

        setStoredPurchasedProducts(purchasedProducts);
    }, []);
    return (
        <div className='bg-[#9538E2] py-8'>
            <div className='bg-white lg:w-9/12 md:w-10/12 w-11/12  mx-auto p-8 rounded-3xl'>
                {
                    storedPurchasedProducts.map(producto=>
                    (<HistoryList
                    producto={producto}
                    key={producto.product_id}
                    ></HistoryList>)
                    )
                }
            </div>
        </div>
    )
}
