import axios from 'axios';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ProductBar = () => {
    const [phones,setPhones]=useState([])
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
      const phonesLoaded = data.data.data;
      const phoneData = phonesLoaded.map(phone=>{
        const parts = phone.slug.split('-');
        const price =  parseInt(parts[1]);
        const singlePhone = {
            name:phone.phone_name,
            price:price
        }
        return singlePhone
      })
      setPhones(phoneData)

    })
    return (
        <div>
         
        <BarChart width={690} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
             <YAxis />
             <Tooltip/>
        </BarChart>
        
            
        </div>
    );
};

export default ProductBar;