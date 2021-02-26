import React from 'react';
import './products.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
    const product=props.item;
  
    const {img,name,price,seller,stock}=product;
   
    return (
        <div className='ProductBody'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            <div className='Details'>
                <p className='productName'>{name}</p>
                <em>Manufactured by :<span>{seller}</span></em>
                <p>Price: $ <span style={{fontWeight:'bold'}}>{price}</span></p>
                <p> Only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleClick(props.item)}>
                <FontAwesomeIcon style={{marginRight:'5px'}} icon={faShoppingCart} /> Add to Card</button>
            </div>
        </div>
    );
};

export default Products;