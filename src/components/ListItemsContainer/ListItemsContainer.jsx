//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import ListItem from "../ListItem/ListItem";
// framer-motion
// import { motion } from "framer-motion";
//*scss
import "./listItemscontainer.scss";

const ListItemsContainer = ({ setAppList }) => {
  const store = useSelector((state) => state.lists.lists);

  return (
    <div className="listitemscontainer">
      {store?.length > 0 &&
        store.map((item, i) => <ListItem key={item.listId} list={item} setAppList={setAppList} i={i} />)}
    </div>
  );
};
//!list прокинуть

export default ListItemsContainer;
