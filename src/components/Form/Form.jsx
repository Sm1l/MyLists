import React from "react";

import Button from "../Button/Button";

import "./form.scss";
import Input from "../Input/Input";

const Form = ({ value, setValue, buttonName, subbitClickHandle, inputRef }) => {
  return (
    <form action="" className="form" onSubmit={subbitClickHandle}>
      <Input value={value} setValue={setValue} placeholder="New list" inputRef={inputRef} />
      <Button name={buttonName} type="submit" value={value} />
    </form>
  );
};

export default Form;
