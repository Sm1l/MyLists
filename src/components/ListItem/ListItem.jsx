//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { toggleListItemIsActive, cleanCheckedTasks } from "../../store/listSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*scss
import "./listitem.scss";

const ListItem = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  // console.log(listItem.tasks.some((item) => item.taskIsChecked === true));
  const storeListItemIsActive = listItem.listItemIsActive;
  const dispatch = useDispatch();

  //* появление Clean
  const hasAnyCheckedTask = () => {
    // console.log(listItem.tasks.some((item) => item.taskIsChecked === true));
    return listItem.tasks.some((item) => item.taskIsChecked === true);
  };

  const cleanButtonIsActive = () => {
    if (storeListItemIsActive && listItem.tasks.length === 0) {
      return false;
    } else if (!hasAnyCheckedTask()) {
      return false;
    } else {
      return storeListItemIsActive && listItem.tasks.length;
    }
  };

  const toggleListItemHandleClick = () => {
    dispatch(toggleListItemIsActive({ listId }));
  };
  //!при нажатии на listItem focus на Input!!!!

  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanCheckedTasks({ listId }));
  };

  return (
    <div className="listitem">
      <div
        className={!storeListItemIsActive ? "listitem__button" : "listitem__button listitem_active"}
        type="button"
        onClick={toggleListItemHandleClick}
      >
        <span className="listitem__name">{listItem.list}</span>
        <span className="listitem__number">{listItem.tasks.length}</span>

        {cleanButtonIsActive() && (
          <button className="listitem__clean" type="button" onClick={cleanTasksHandleClick}>
            Clean
          </button>
        )}
      </div>
      {storeListItemIsActive && <TaskItem listId={listId} />}
    </div>
  );
};

export default ListItem;
