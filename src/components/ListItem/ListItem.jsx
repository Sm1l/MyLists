import React from "react";

import "./listitem.scss";

const ListItem = (name, number) => {
  return (
    <li className="listitem">
      <p className="listitem__name">{name}</p>
      <p className="listitem__number">{number}</p>
    </li>
  );
};

export default ListItem;
