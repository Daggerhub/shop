import React from "react";
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Navbar</Link>
      <Link to="/cart">
        <Cart />
      </Link>
    </div>
  );
};

export default Navbar;
