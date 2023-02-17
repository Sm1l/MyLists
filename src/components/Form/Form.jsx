import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addList } from "../../store/listSlice";

import Button from "../Button/Button";

import "./form.scss";
import Input from "../Input/Input";

const Form = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addList({ name }));
      console.log("New list:", name);
    } else {
      console.log("Please enter new list");
    }
    setName("");
  };

  return (
    <form action="" className="form" onSubmit={addItem}>
      <Input value={name} setValue={setName} placeholder="New list" />
      <Button name="+ Add" type="submit" value={name} />
    </form>
  );
};

export default Form;
