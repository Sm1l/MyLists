import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskItem from "../TaskItem/TaskItem";

import "./listitem.scss";

const ListItem = ({ listId }) => {
  //todo принимаем listItemIsActive
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  // console.log("listItem: ", listItem);

  const [listItemIsActive, setListItemIsActive] = useState(false);

  const buttonRef = useRef();

  const listItemHandleClick = () => {
    if (!listItemIsActive) {
      buttonRef.current.classList.add("listitem_active");
    } else {
      buttonRef.current.classList.remove("listitem_active");
    }
    setListItemIsActive(!listItemIsActive); //todo изменить в Redux
  };

  return (
    <div className="listitem">
      <button className="listitem__button" type="button" onClick={listItemHandleClick} ref={buttonRef}>
        <span className="listitem__name">{listItem.list}</span>
        <span className="listitem__number">{listItem.tasks.length}</span>
      </button>
      {listItemIsActive && <TaskItem listId={listId} />}
    </div>
  );
};

export default ListItem;
