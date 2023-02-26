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
            key={item.id}
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
            toggleTaskChecked={toggleTaskChecked}
          />
        );
      })}
    </div>
  );
}

export default OneTaskContainer;
