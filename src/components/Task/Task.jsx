//*react
import React from "react";
//*redux
import { toggleTaskIsChecked } from "../../store/listSlice";
import { useDispatch } from "react-redux";
//*framer-motion
import { motion } from "framer-motion";
//*scss
import "./task.scss";

function Task({ task, isChecked, taskId, listId }) {
  const dispatch = useDispatch();

  const toggleTask = () => {
    dispatch(toggleTaskIsChecked({ listId, taskId }));
  };

  return (
    <motion.div
      className="task"
      initial={{ opacity: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <label className="task__label">
        <input className="task__checkbox" id={taskId} type="checkbox" checked={isChecked} onChange={toggleTask} />
      </label>
      <label className={!isChecked ? "task__text" : "task__text task__text_active"} htmlFor={taskId}>
        {task}
      </label>
    </motion.div>
  );
}

export default Task;
