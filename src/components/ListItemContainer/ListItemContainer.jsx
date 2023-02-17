import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";

import "./listItemcontainer.scss";
import "../ListItem/listitem.scss"; //todo потом удалить

const ListItemContainer = () => {
  const listItem = useSelector((state) => state.lists.lists);
  console.log(listItem);

  return (
    //!подумать
    <ul className="listitemcontainer">
      {listItem?.length > 0 &&
        listItem.map((item) => (
          <li className="listitem" key={item.id}>
            <p className="listitem__name">{item.name}</p>
            <p className="listitem__number">{item.number}</p>
          </li>
          // <ListItem key={item.id} name={item.name} number={item.number} />
        ))}
    </ul>
  );
};

export default ListItemContainer;
