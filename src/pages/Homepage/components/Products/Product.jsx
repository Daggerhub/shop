import React, { useContext } from "react";
import './Product.css'
import { ProductContext } from "../../../../context/ProductContext";
import Button from "../../../../components/Button";
const Product = (data) => {
  const {
    data: { id, title, image },
  } = data;

  const { addToCart, cartItems } = useContext(ProductContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="card">
        <div style={{
            padding: '16px'
        }}>
      <img
        src={image}
        className="card-img"
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">
          {title}
        </h5>
        <Button onclick={() => addToCart(id)} btnText="Add to cart">{cartItemCount > 0 && <> ({cartItemCount})</>}</Button>
      </div>
      </div>
    </div>
  );
};

export default Product;
