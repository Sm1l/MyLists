import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../store/listSlice";
import Form from "../Form/Form";
import ListItemContainer from "../ListItemContainer/ListItemContainer";

import "./appcontainer.scss";

const AppContainer = () => {
  const [list, setList] = useState("");
  // const inputRef = useRef(null);

  const dispatch = useDispatch();

  const addListItem = (e) => {
    e.preventDefault();
    if (list.trim()) {
      dispatch(addList({ list }));
      // console.log("New list:", list);
    } else {
      console.log("Please enter new list");
    }
    setList("");
  };

  return (
    <div className="appcontainer">
      <h1 className="app__title">My Lists</h1>
      {/* <StyledGlobal /> */}
      <Form value={list} setValue={setList} placeholder="New list" buttonName="+ Add" submitClickHandle={addListItem} />
      {/* <Form buttonName="+ Add" subbitClickHandle={addItem} inputRef={inputRef} /> */}
      <ListItemContainer />
      {/* <ListItem name="name" number="number" /> */}
    </div>
  );
};

export default AppContainer;
