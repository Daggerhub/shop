import React from "react";

const Button = ({ btnText, onclick, children }) => {
  return (
    <button className="card-btn" onClick={onclick}>
      {btnText}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
