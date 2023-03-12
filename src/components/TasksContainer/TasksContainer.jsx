//*react
import React from "react";
//*components
import Task from "../Task/Task";
//*scss
import "./taskscontainer.scss";

function TasksContainer({ list }) {
  const taskList = list.tasks;
  const listId = list.listId;

  return (
    <div className="taskscontainer">
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
    </div>
  );
}

export default TasksContainer;
