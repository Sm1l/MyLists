import React, { useState } from "react";

import TaskItem from "../TaskItem/TaskItem";

import "./listitem.scss";

const ListItem = ({ name, number }) => {
  const [listItemisActive, setListItemisActive] = useState(false);

  const listItemHandleClick = (e) => {
    // console.log("button", e.target);
    if (!listItemisActive) {
      e.target.classList.add("listitem_active");
    } else {
      e.target.classList.remove("listitem_active");
    }
    setListItemisActive(!listItemisActive);
  };

  return (
    <div className="listitem">
      <button className="listitem__button" type="button" onClick={listItemHandleClick}>
        <p className="listitem__name">{name}</p>
        <p className="listitem__number">{number}</p>
      </button>
      {listItemisActive && <TaskItem setListItemisActive={setListItemisActive} />}
    </div>
  );
};

export default ListItem;
