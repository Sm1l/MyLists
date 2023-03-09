//*react
import React from "react";
//*scss
import "./input.scss";

const Input = ({ value, setValue, placeholder, inputRef }) => {
  const inputHandleChange = (e) => {
    if (setValue) {
      setValue(e.target.value);
    }
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
