import React from "react";
import "./input.scss";
import Button from "../Button/Button";

const Input = ({ value, setValue, placeholder, inputRef }) => {
  const inputHandleChange = (e) => {
    if (setValue) {
      setValue(e.target.value);
    }
    console.log(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="input"
        id="input"
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={inputHandleChange}
        ref={inputRef}
      />
      <label htmlFor="input" className="input__label"></label>
    </>
  );
};

export default Input;
