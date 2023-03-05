import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";

import "./listItemcontainer.scss";

const ListItemContainer = () => {
  const store = useSelector((state) => state.lists.lists);

  return (
    <div className="listitemcontainer">
      {store?.length > 0 &&
        store.map((item) => <ListItem key={item.listId} list={item.list} listItemIsActive={item.listItemIsActive} />)}
    </div>
  );
};

export default ListItemContainer;
