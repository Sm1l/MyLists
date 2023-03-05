import React from "react";
import OneTask from "../OneTask/OneTask";

import "./onetaskcontainer.scss";

function OneTaskContainer({ taskList, setTaskList }) {
  const toggleTaskChecked = (id) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id !== id) return item;
        return { ...item, isChecked: !item.isChecked };
      })
    );
  };

  return (
    <div className="onetaskcontainer">
      {taskList.map((item) => {
        return (
          <OneTask
            key={item.taskId}
            text={item.task}
            isChecked={item.taskIsChecked}
            id={item.taskId}
            toggleTaskChecked={toggleTaskChecked}
            // toggleTaskChecked={toggleTaskChecked(item.id)}
          />
        );
      })}
    </div>
  );
}

export default OneTaskContainer;
