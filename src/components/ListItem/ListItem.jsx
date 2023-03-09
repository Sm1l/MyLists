//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { toggleListItemIsActive } from "../../store/listSlice";
//*components
import TaskItem from "../TaskItem/TaskItem";
//*scss
import "./listitem.scss";

const ListItem = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const storeListItemIsActive = listItem.listItemIsActive;
  const dispatch = useDispatch();

  const listItemHandleClick = () => {
    dispatch(toggleListItemIsActive({ listId }));
  };

  return (
    <div className="listitem">
      <button
        className={!storeListItemIsActive ? "listitem__button" : "listitem__button listitem_active"}
        type="button"
        onClick={listItemHandleClick}
      >
        <span className="listitem__name">{listItem.list}</span>
        <span className="listitem__number">{listItem.tasks.length}</span>
      </button>
      {storeListItemIsActive && <TaskItem listId={listId} />}
    </div>
  );
};

export default ListItem;
