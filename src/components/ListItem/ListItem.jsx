//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { toggleListItemIsActive, cleanCheckedTasks, deleteList } from "../../store/listSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*scss
import "./listitem.scss";

const ListItem = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const storeListItemIsActive = listItem.listItemIsActive;
  const dispatch = useDispatch();

  //* появление Clean
  const hasAnyCheckedTask = () => {
    if (!listItem.tasks) {
      return false;
    } else return listItem.tasks.some((item) => item.taskIsChecked === true);
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

  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanCheckedTasks({ listId }));
  };

  const cleanListHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteList({ listId }));
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
        {storeListItemIsActive && listItem.tasks.length === 0 && (
          <button className="listitem__clean" type="button" onClick={cleanListHandleClick}>
            Delete List
          </button>
        )}
      </div>
      {storeListItemIsActive && <TaskItem listId={listId} />}
    </div>
  );
};

export default ListItem;
