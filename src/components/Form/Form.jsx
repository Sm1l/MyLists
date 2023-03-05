import React from "react";

import Button from "../Button/Button";
// import Button2 from "../Button/Button2";

import "./form.scss";
import Input from "../Input/Input";

const Form = ({ value, setValue, buttonName, placeholder, submitClickHandle, inputRef }) => {
  return (
    <form action="" className="form" onSubmit={submitClickHandle}>
      <Input value={value} setValue={setValue} placeholder={placeholder} inputRef={inputRef} />
      <Button name={buttonName} type="submit" value={value} />
      {/* <Button2 name={buttonName} type="submit" value={value} /> */}
    </form>
  );
};

export default Form;
