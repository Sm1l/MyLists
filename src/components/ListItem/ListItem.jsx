//*react
import React from "react";
//*redux
import { useDispatch } from "react-redux";
import { toggleListItemIsActive, deleteList } from "../../store/listSlice";
import { toggleModalIsVisible } from "../../store/modalSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*scss
import "./listitem.scss";

const ListItem = ({ list, setAppList }) => {
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

  //*открытие модального окна очищения Task
  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAppList(list);
    dispatch(toggleModalIsVisible());
  };

  //*удаление List
  const deleteListHandleClick = (e) => {
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
        <span className="listitem__name">{list.list}</span>
        <span className="listitem__number">{list.tasks.length}</span>

        {cleanButtonIsActive() && (
          <button className="listitem__clean" type="button" onClick={cleanTasksHandleClick}>
            Clean
          </button>
        )}
        {storeListItemIsActive && list.tasks.length === 0 && (
          <button className="listitem__clean" type="button" onClick={deleteListHandleClick}>
            Delete List
          </button>
        )}
      </div>
      {storeListItemIsActive && <TaskItem list={list} />}
    </div>
  );
};

export default ListItem;
