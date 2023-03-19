//*react
import React from "react";
//*redux
import { useDispatch } from "react-redux";
import { toggleListItemIsActive, deleteList, cleanCheckedTasks } from "../../store/listSlice";
import { setSingleList } from "../../store/singleListSlice";
import { toggleModalIsVisible } from "../../store/modalSlice";
//*components
import TaskItem from "../TaskItem";
//*helpers
import { getCookie } from "../../helpers/cookie";
//*animation
import { motion, AnimatePresence } from "framer-motion";
import { listItemVariants, buttonVariants } from "./animation";
//*scss
import "./listitem.scss";
import "../../abstracts/variables.scss";

const ListItem = ({ list, i }) => {
  const storeListItemIsActive = list.listItemIsActive;
  const listId = list.listId;
  const dispatch = useDispatch();

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
  //*записываем в redux выбранный list
  const setClearingList = () => {
    dispatch(setSingleList({ list }));
  };
  //todo-------------------------------

  //*открытие модального окна очищения Task (наличие/отсутствие cookie)
  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setClearingList();
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
