//*react
import React from "react";
//*components
import Task from "../Task";
//*animation
import { AnimatePresence } from "framer-motion";
//*scss
import "./taskscontainer.scss";

function TasksContainer({ list }) {
  const taskList = list.tasks;
  const listId = list.listId;

  return (
    <div className="taskscontainer">
      <AnimatePresence>
        {taskList?.map((item) => {
          return (
            <Task
              key={item.taskId}
              task={item.task}
              isChecked={item.taskIsChecked}
              taskId={item.taskId}
              listId={listId}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default TasksContainer;
