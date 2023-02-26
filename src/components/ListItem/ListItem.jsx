import React, { useState } from "react";

import TaskItem from "../TaskItem/TaskItem";

import "./listitem.scss";

const ListItem = ({ name, number }) => {
  //todo принимаем listItemIsActive
  const [listItemIsActive, setListItemIsActive] = useState(false);

  const listItemHandleClick = (e) => {
    // console.log("button", e.target);
    if (!listItemIsActive) {
      e.target.classList.add("listitem_active");
    } else {
      e.target.classList.remove("listitem_active");
    }
    setListItemIsActive(!listItemIsActive); //todo изменить в Redux
  };

  return (
    <div className="listitem">
      <button className="listitem__button" type="button" onClick={listItemHandleClick}>
        <p className="listitem__name">{name}</p>
        <p className="listitem__number">{number}</p>
      </button>
      {listItemIsActive && <TaskItem />}
    </div>
  );
};

export default ListItem;
