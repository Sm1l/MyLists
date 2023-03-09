//*react
import React from "react";
//*scss
import "./button.scss";

const Button = ({ name, type, value }) => {
  return (
    <button className={value?.trim() ? "button button_active" : "button"} type={type}>
      {name}
    </button>
  );
};

export default Button;
