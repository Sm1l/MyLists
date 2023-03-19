//*react
import React from "react";
//*redux
import { toggleTaskIsChecked } from "../../store/listSlice";
import { useDispatch } from "react-redux";
//*animation
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
      initial={{ opacity: 0, x: 1000, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, transition: { duration: 0.5 } }}
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
