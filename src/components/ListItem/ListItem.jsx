//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { toggleListItemIsActive, removeCheckedTasks } from "../../store/listSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*scss
import "./listitem.scss";

const ListItem = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const storeListItemIsActive = listItem.listItemIsActive;
  const dispatch = useDispatch();

  //todo----------------------------------------------
  //! в redux???
  // const hasAnyCheckedTask = () => {
  //   const check = listItem.tasks.some((task) => task.taskIsChecked === true);
  //   return check;
  // };

  // hasAnyCheckedTask(state, action) {
  //   console.log("hasAnyCheckedTask");
  //   return state.lists
  //     .find((item) => item.listId === action.payload.listId)
  //     .tasks.some((task) => task.taskIsChecked === true);
  // },

  const anyCheckedTask = () => {
    // dispatch(hasAnyCheckedTask({ listId }));
  };
  anyCheckedTask();
  //todo----------------------------------------------
  //!не простая ф-я??
  const cleanButtonIsActive = () => {
    if (storeListItemIsActive && listItem.tasks.length === 0) {
      return false;
    } else {
      return storeListItemIsActive && listItem.tasks.length;
    }
  };
  // console.log("cleanIsActive: ", cleanIsActive());

  const listItemHandleClick = () => {
    dispatch(toggleListItemIsActive({ listId }));
  };
  //!при нажатии на listItem focus на Input!!!!

  const clearTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeCheckedTasks({ listId }));
  };

  return (
    <div className="listitem">
      <div
        className={!storeListItemIsActive ? "listitem__button" : "listitem__button listitem_active"}
        type="button"
        onClick={listItemHandleClick}
      >
        <span className="listitem__name">{listItem.list}</span>
        <span className="listitem__number">{listItem.tasks.length}</span>

        {cleanButtonIsActive() && (
          <button className="listitem__clean" type="button" onClick={clearTasksHandleClick}>
            Clean
          </button>
        )}
      </div>
      {storeListItemIsActive && <TaskItem listId={listId} />}
    </div>
  );
};

export default ListItem;
