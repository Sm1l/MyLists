import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskItem from "../TaskItem/TaskItem";

import "./listitem.scss";

const ListItem = ({ list }) => {
  //todo принимаем listItemIsActive
  const store = useSelector((state) => state.lists.lists);
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
        <span className="listitem__name">{list}</span>
        <span className="listitem__number">{store[0].tasks.length}</span>
      </button>
      {listItemIsActive && <TaskItem />}
    </div>
  );
};

export default ListItem;
