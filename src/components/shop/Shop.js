import React from 'react';
import './shop.css'
import { useState } from 'react';
import fakeData from '../../fakeData'
import Products from '../products/Products';
import Card from '../Card/Card';

const Shop = () => {
    const products=fakeData;
    const [product,setProduct]=useState(products) ; 
    const [card,setCard]=useState([]);

    const handleClick=(product)=>{
        const items= [...card,product];
        setCard(items);
    }
   
    return (
        <div className='main'>
            <div className='product'>
                {product.map(item=> <Products item={item} handleClick={handleClick}>

                </Products>)}
               
            </div>
            <div className='card'>
            <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;