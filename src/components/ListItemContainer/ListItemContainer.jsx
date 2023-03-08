import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";

import "./listItemcontainer.scss";

//*render ListItem
const ListItemContainer = () => {
  const store = useSelector((state) => state.lists.lists); 
  // console.log(store, "store");
  //!id отсюда доставать?
  return (
    <div className="listitemcontainer">
      {store?.length > 0 &&
        store.map((item) => (
          // <ListItem key={item.listId} list={item.list} listItemIsActive={item.listItemIsActive} listId={item.listId} />
          <ListItem key={item.listId} listId={item.listId} />
        ))}
    </div>
  );
};

export default ListItemContainer;
