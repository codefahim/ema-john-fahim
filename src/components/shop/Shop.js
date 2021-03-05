import React, { useEffect } from "react";
import "./shop.css";
import { useState } from "react";
import fakeData from "../../fakeData";
import Products from "../products/Products";
import Card from "../Card/Card";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";

const Shop = () => {
  const products = fakeData;
  const [product, setProduct] = useState(products);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previewsCart = productKeys.map((exitingKey) => {
      const selectedProduct = fakeData.find((data) => data.key === exitingKey);
      selectedProduct.quantity = savedCart[exitingKey];
      return selectedProduct;
    });
    setCard(previewsCart);
    console.log(previewsCart);
  }, []);

  const handleClick = (product) => {
    let newCart;
    let countItems = 1;
    let sameProduct = card.find((pd) => pd.key === product.key);
    if (sameProduct) {
      countItems = sameProduct.quantity + 1;
      sameProduct.quantity = countItems;
      const otherProduct = card.filter((pd) => pd.key !== product.key);
      console.log(otherProduct);
      newCart = [...otherProduct, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...card, product];
    }
    setCard(newCart);
    addToDatabaseCart(product.key, countItems);
  };

  return (
    <div className="main">
      <div className="product">
        {product.map((item) => (
          <Products
            key={item.key}
            item={item}
            showAddtoCard={true}
            handleClick={handleClick}
          ></Products>
        ))}
      </div>
      <div className="card">
        <Card card={card} handleReviewOrder={true}></Card>
      </div>
    </div>
  );
};

export default Shop;
