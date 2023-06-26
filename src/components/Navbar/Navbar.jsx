import React from "react";
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'
const Navbar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: 'auto 24px'
    }}>
      <Link to="/"><img src={Logo} width="120px" height="120px" alt="Logo"/></Link>
      <Link to="/cart">
        <Cart style={{
          height: '32px',
          width: '32px'
        }}/>
      </Link>
    </div>
  );
};

export default Navbar;
