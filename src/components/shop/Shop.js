import React from "react";
import "./shop.css";
import { useState } from "react";
import fakeData from "../../fakeData";
import Products from "../products/Products";
import Card from "../Card/Card";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const products = fakeData;
  const [product, setProduct] = useState(products);
  const [card, setCard] = useState([]);

  const handleClick = (product) => {
    const items = [...card, product];
    setCard(items);
    const sameProduct = items.filter((pd) => pd.key === product.key);
    const countItems = sameProduct.length;
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
        <Card card={card}></Card>
      </div>
    </div>
  );
};

export default Shop;
