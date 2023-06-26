import React, { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";
import Button from "../../../../components/Button";
import "./CartItem.css";

const CartItem = (product) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ProductContext);
  const {
    product: { id, image },
  } = product;
  return (
    <div className="card">
      <div
        style={{
          padding: "16px",
        }}
      >
        <img src={image} className="card-img" alt="Card" />

        <div className="cart-body">
          <Button onclick={() => addToCart(id)} btnText="Add"/>
          <span>{cartItems[id]}</span>
          <Button onclick={() => removeFromCart(id)} btnText="Remove" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
