import React, { useState } from "react";

import TaskItem from "../TaskItem/TaskItem";

import "./listitem.scss";

const ListItem = ({ name, number }) => {
  const [isActive, setIsActive] = useState(false);

  const listItemHandleClick = (e) => {
    console.log("button", e.target);
    if (!isActive) {
      e.target.classList.add("listitem_active");
    } else {
      e.target.classList.remove("listitem_active");
    }
    setIsActive(!isActive);
  };

  return (
    <div className="listitem">
      <button className="listitem__button" type="button" onClick={listItemHandleClick}>
        <p className="listitem__name">{name}</p>
        <p className="listitem__number">{number}</p>
      </button>
      {isActive && <TaskItem />}
    </div>
  );
};

export default ListItem;
