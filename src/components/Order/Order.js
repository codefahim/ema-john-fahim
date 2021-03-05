import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./Order.css";

const Order = () => {
  const [cart, setCart] = useState([]);
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
      {cart.map((item) => (
        <ReviewItems key={item.key} reviewItem={item}></ReviewItems>
      ))}
    </>
  );
};

export default Order;
