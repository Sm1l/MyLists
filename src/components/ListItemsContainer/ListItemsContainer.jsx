//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import ListItem from "../ListItem/ListItem";
//*scss
import "./listItemscontainer.scss";

const ListItemsContainer = () => {
  const store = useSelector((state) => state.lists.lists);
  return (
    <div className="listitemscontainer">
      {store?.length > 0 && store.map((item) => <ListItem key={item.listId} list={item} />)}
    </div>
  );
};
//!list прокинуть

export default ListItemsContainer;
