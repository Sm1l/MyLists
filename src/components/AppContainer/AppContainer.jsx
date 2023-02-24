import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../store/listSlice";
import Form from "../Form/Form";
import ListItemContainer from "../ListItemContainer/ListItemContainer";

import "./appcontainer.scss";

const AppContainer = () => {
  const [name, setName] = useState("");
  // const inputRef = useRef(null);

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

  // const addItem = (e) => {
  //   e.preventDefault();
  //   if (inputRef.current.value.trim()) {
  //     dispatch(addList({ inputValue }));
  //     console.log("New list:", inputRef.current.value);
  //   } else {
  //     console.log("Please enter new list");
  //   }
  //   // setName("");
  // };

  return (
    <div className="appcontainer">
      <h1 className="app__title">My Lists</h1>
      {/* <StyledGlobal /> */}
      <Form value={name} setValue={setName} buttonName="+ Add" subbitClickHandle={addItem} />
      {/* <Form buttonName="+ Add" subbitClickHandle={addItem} inputRef={inputRef} /> */}
      <ListItemContainer />
      {/* <ListItem name="name" number="number" /> */}
    </div>
  );
};

export default AppContainer;
