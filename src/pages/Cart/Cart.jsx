import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { Data } from "../../data";
import CartItems from "./components/CartItem";
import EmptyCart from "../../assets/images/EmptyCart.png";
import "./Cart.css";
import Button from "../../components/Button";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();
  const payload = Data.filter((data) => cartItems[data.id] > 0).map((data) => ({
    ...data,
    quantity: cartItems[data.id],
  }));
  const navigate = useNavigate();

  if (totalAmount === 0) {
    return (
      <div className="empty-cart">
        <h1>Nothing in the cart</h1>
        <img src={EmptyCart} alt="EmptyCart" width="280px" />
        <Button onclick={() => navigate("/")} btnText="Continue Shopping" />
      </div>
    );
  }

  return (
    <div>
      <div className="cart">
        <h1>Your Cart Items</h1>
        {Data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id}>
                <CartItems product={product} />
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 && (
        <div className="checkout">
          <p> Subtotal: ₹ {totalAmount} </p>
          <div className="checkout-btn">
            <Button onclick={() => navigate("/")} btnText="Continue Shopping" />
            <Button
              onclick={() => {
                console.log(payload);
              }}
              btnText="Checkout"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
