import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Card from "../Card/Card";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./Order.css";

const Order = () => {
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedData = getDatabaseCart();
    const productsKey = Object.keys(savedData);
    const cartProduct = productsKey.map((key) => {
      const product = fakeData.find((productItem) => productItem.key === key);
      product.quantity = savedData[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <>
      <h1>Card Items : {cart.length}</h1>
      <div className="main">
        <div className="product">
          {cart.map((item) => (
            <ReviewItems
              key={item.key}
              reviewItem={item}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItems>
          ))}
        </div>
        <div className="card">
          <Card handleButton={true} card={cart}></Card>
        </div>
      </div>
    </>
  );
};

export default Order;
