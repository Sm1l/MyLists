//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import ListItem from "../ListItem/ListItem";
//*scss
import "./listItemcontainer.scss";

const ListItemContainer = () => {
  const store = useSelector((state) => state.lists.lists);
  //!id отсюда доставать?
  return (
    <div className="listitemcontainer">
      {store?.length > 0 && store.map((item) => <ListItem key={item.listId} listId={item.listId} />)}
    </div>
  );
};

export default ListItemContainer;
