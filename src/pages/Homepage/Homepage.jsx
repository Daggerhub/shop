import React from "react";
import { Data } from "../../data";
import Product from "./components/Products/Product";
const Homepage = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      margin: '16px 24px'
    }}>
      {Data.map((product) => (
        <div key={product.id} >
          <Product data={product} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
