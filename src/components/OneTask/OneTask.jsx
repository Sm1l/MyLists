import React from "react";
import { toggleTaskIsChecked } from "../../store/listSlice";
import { useDispatch, useSelector } from "react-redux";

import "./onetask.scss";

function OneTask({ task, isChecked, taskId, listId }) {
  // const store = useSelector((state) => state.lists.lists);
  // const listItem = store.find((item) => item.listId === listId);
  // const taskList = listItem.tasks;
  // const task = taskList.filter((item) => item.taskId === taskId);

  const dispatch = useDispatch();

  const toggleTask = () => {
    dispatch(toggleTaskIsChecked({ taskId, listId })); //!разобраться
  };

  return (
    <div className="onetask">
      <label className="onetask__label">
        <input className="onetask__checkbox" id={taskId} type="checkbox" checked={isChecked} onChange={toggleTask} />
      </label>
      <label className={!isChecked ? "onetask__text" : "onetask__text onetask__text_active"} htmlFor={taskId}>
        {task}
      </label>
    </div>
  );
}

export default OneTask;
