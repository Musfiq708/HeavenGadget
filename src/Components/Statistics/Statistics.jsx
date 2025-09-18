import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function Statistics() {
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/fakedata.json') 
      .then(res => res.json())
      .then(products => {
        const chartData = products.map(product => ({
          product_title: product.product_title,
          price: product.price
        }));
        setData(chartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  if (data.length === 0) {
    return <div>Loading chart data...</div>;
  }
  return (
    <div className='w-10/12 mx-auto'>
      
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="product_title" 
          angle={-45} 
          textAnchor="end" 
          interval={0} 
          height={100} 
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" name="Price ($)" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}
