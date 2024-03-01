import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';


type Product = {
    id: number;
    name: string;
    category : string
    description: string;
  }


const CategoryButton = () =>  
{
    const [products, setProducts] = useState<Product[]>([]);


useEffect(() => {
  axios.get('https://72ced2f2-d9dc-48d5-b3d2-d778b161aa65-00-a256fqssrjq8.pike.replit.dev/courses')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}, []);


return (
  <div className="App Category-container">
    {products.map((product: Product) => (
      <div key={product.id}>
        <button className='CategoryBtn'>{product.category}</button>
        


      </div>
    ))}
  </div>
);
}


export default CategoryButton