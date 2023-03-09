//*react
import React, { useState } from "react";
//*redux
import { useDispatch } from "react-redux";
//*components
import { addList } from "../../store/listSlice";
import Form from "../Form/Form";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
//*scss
import "./appcontainer.scss";

const AppContainer = () => {
  const [list, setList] = useState("");

  const dispatch = useDispatch();

  const addListItem = (e) => {
    e.preventDefault();
    if (list.trim()) {
      dispatch(addList({ list }));
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
      <ListItemContainer />
    </div>
  );
};

export default AppContainer;
