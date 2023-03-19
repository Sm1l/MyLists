//*react
import React, { useState, useEffect } from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/listSlice";
//*components
import Form from "../Form";
import ListItemsContainer from "../ListItemsContainer";
//framer-motion
// import { motion, AnimatePresence } from "framer-motion";
//*scss
import "./appcontainer.scss";

const AppContainer = () => {
  const [list, setList] = useState("");
  const store = useSelector((state) => state.lists.lists);

  const dispatch = useDispatch();

  //*запись в localstorage

  useEffect(() => {
    localStorage.setItem("MyLists", JSON.stringify(store));
    return () => {};
  }, [store]);

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
      <ListItemsContainer />
    </div>
  );
};

export default AppContainer;
