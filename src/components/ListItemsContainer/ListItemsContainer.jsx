//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import ListItem from "../ListItem";
import ModalCleanList from "../ModalCleanList";
//*animation
import { motion, AnimatePresence } from "framer-motion";
//*scss
import "./listItemscontainer.scss";

const ListItemsContainer = () => {
  const store = useSelector((state) => state.lists.lists);
  const modalIsVisible = useSelector((state) => state.modal.modalIsVisible);
  const targetList = useSelector((state) => state.singleList.list);

  return (
    // <AnimatePresence mode="wait">
    <>
      <motion.div
        className="listitemscontainer"
        // initial={{ opacity: 0, transition: { duration: 2 } }}
        // animate={{ opacity: 1, transition: { duration: 2 } }}
        // exit={{ height: 0, transition: { duration: 3 } }}
      >
        <AnimatePresence>
          {store?.length > 0 && store.map((item, i) => <ListItem key={item.listId} list={item} i={i} />)}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{modalIsVisible && <ModalCleanList list={targetList} />}</AnimatePresence>
    </>
  );
};

export default ListItemsContainer;
