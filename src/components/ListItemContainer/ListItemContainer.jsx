import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";

import "./listItemcontainer.scss";
import "../ListItem/listitem.scss"; //todo потом удалить

const ListItemContainer = () => {
  const listItem = useSelector((state) => state.lists.lists);
  console.log(listItem);

  return (
    <div className="listitemcontainer">
      {listItem?.length > 0 && listItem.map((item) => <ListItem key={item.id} name={item.name} number={item.number} />)}
    </div>
  );
};

export default ListItemContainer;
