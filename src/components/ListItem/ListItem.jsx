//*react
import React from "react";
//*redux
import { useDispatch } from "react-redux";
import { toggleListItemIsActive, deleteList, cleanCheckedTasks } from "../../store/listSlice";
import { toggleModalIsVisible } from "../../store/modalSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*helpers
import { getCookie } from "../../helpers/cookie";
//*framer-motion
import { motion, AnimatePresence } from "framer-motion";
//*scss
import "./listitem.scss";
import "../../abstracts/variables.scss";

const ListItem = ({ list, setAppList, i }) => {
  const storeListItemIsActive = list.listItemIsActive;
  const listId = list.listId;
  const dispatch = useDispatch();

  const listItemVariants = {
    initial: { opacity: 0, y: 1000 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "just",
        ease: "easeInOut",
        duration: 0.5,
      },
    }),
    exit: { opacity: 0, x: 1000, transition: { duration: 1 } },
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      scale: 3,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  //* появление кнопки Clean
  const hasAnyCheckedTask = () => {
    if (!list.tasks) {
      return false;
    } else return list.tasks.some((item) => item.taskIsChecked === true);
  };

  const cleanButtonIsActive = () => {
    if (storeListItemIsActive && list.tasks.length === 0) {
      return false;
    } else if (!hasAnyCheckedTask()) {
      return false;
    } else {
      return storeListItemIsActive && list.tasks.length;
    }
  };
  //*toggle активного состояния List
  const toggleListItemHandleClick = () => {
    dispatch(toggleListItemIsActive({ listId }));
  };

  //*открытие модального окна очищения Task (наличие/отсутствие cookie)
  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAppList(list);
    if (getCookie("clearListWithoutRequest") === undefined) {
      dispatch(toggleModalIsVisible());
    } else {
      dispatch(cleanCheckedTasks({ listId }));
    }
  };

  //*удаление List
  const deleteListHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteList({ listId }));
  };

  return (
    <motion.div
      className="listitem"
      variants={listItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={i}
    >
      <div
        className={!storeListItemIsActive ? "listitem__button" : "listitem__button listitem_active"}
        type="button"
        onClick={toggleListItemHandleClick}
      >
        <span className="listitem__name">{list.list}</span>
        <span className="listitem__number">{list.tasks.length}</span>
        <AnimatePresence>
          {cleanButtonIsActive() && (
            <motion.button
              className="listitem__clean"
              type="button"
              onClick={cleanTasksHandleClick}
              initial="initial"
              whileInView="animate"
              exit="initial"
              variants={buttonVariants}
            >
              Clean
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {storeListItemIsActive && list.tasks.length === 0 && (
            <motion.button
              className="listitem__clean"
              type="button"
              onClick={deleteListHandleClick}
              initial="initial"
              whileInView="animate"
              exit="initial"
              variants={buttonVariants}
            >
              Delete List
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{storeListItemIsActive && <TaskItem list={list} />}</AnimatePresence>
    </motion.div>
  );
};

export default ListItem;
