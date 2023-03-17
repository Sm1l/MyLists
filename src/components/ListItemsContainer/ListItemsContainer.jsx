//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import ListItem from "../ListItem/ListItem";
//*framer-motion
import { motion, AnimatePresence } from "framer-motion";
//*scss
import "./listItemscontainer.scss";

const ListItemsContainer = ({ setAppList }) => {
  const store = useSelector((state) => state.lists.lists);

  return (
    // <AnimatePresence mode="wait">
    <motion.div
      className="listitemscontainer"
      // initial={{ opacity: 0, transition: { duration: 2 } }}
      // animate={{ opacity: 1, transition: { duration: 2 } }}
      // exit={{ height: 0, transition: { duration: 3 } }}
    >
      <AnimatePresence>
        {store?.length > 0 &&
          store.map((item, i) => <ListItem key={item.listId} list={item} setAppList={setAppList} i={i} />)}
      </AnimatePresence>
    </motion.div>
    // </AnimatePresence>
  );
};
//!list прокинуть

export default ListItemsContainer;
