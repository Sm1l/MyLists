import React from "react";
import "./input.scss";
import Button from "../Button/Button";

const Input = ({ value, setValue, placeholder }) => {
  const inputHandleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="input"
        id="input"
        value={value}
        placeholder={placeholder}
        onChange={inputHandleChange}
      />
      <label htmlFor="input" className="input__label"></label>
    </>
  );
};

export default Input;
