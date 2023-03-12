//*react
import React from "react";
//*redux
import { toggleTaskIsChecked } from "../../store/listSlice";
import { useDispatch } from "react-redux";
//*scss
import "./task.scss";

function Task({ task, isChecked, taskId, listId }) {
  const dispatch = useDispatch();

  const toggleTask = () => {
    dispatch(toggleTaskIsChecked({ listId, taskId }));
  };

  return (
    <div className="task">
      <label className="task__label">
        <input className="task__checkbox" id={taskId} type="checkbox" checked={isChecked} onChange={toggleTask} />
      </label>
      <label className={!isChecked ? "task__text" : "task__text task__text_active"} htmlFor={taskId}>
        {task}
      </label>
    </div>
  );
}

export default Task;
