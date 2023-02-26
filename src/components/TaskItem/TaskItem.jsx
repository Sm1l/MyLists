import React, { useState, useRef, useEffect } from "react";

import Form from "../Form/Form";
import OneTaskContainer from "../OneTaskContainer/OneTaskContainer";
import createId from "../../helpers/createId";

import "./taskitem.scss";

const TaskItem = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef();
  const [taskItemIsActive, setTaskItemIsActive] = useState(false);

  const [taskList, setTaskList] = useState(() => {
    //todo нужно поднимать
    return JSON.parse(localStorage.getItem("MyLists.taskList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("MyLists.taskList", JSON.stringify(taskList));
  }, [taskList]);

  const taskItemHandleClick = (e) => {
    // console.log("button", e.target);
    // console.log(focusInputRef.current); //?при открытии не видит ref, подумать

    if (!taskItemIsActive) {
      e.target.classList.add("taskitem_active");
    } else {
      e.target.classList.remove("taskitem_active");
    }
    setTaskItemIsActive(!taskItemIsActive);
  };

  // const taskItemHandleSubmit = (e) => {
  //   e.preventDefault();
  //   if (task.trim()) {
  //     console.log("taskItemHandleSubmit");
  //     setListItemisActive(false);
  //   } else {
  //     console.log("Please enter new task");
  //   }
  //   setTask("");
  // };

  //* добавление task
  const addTask = () => {
    console.log(task);
    setTaskList(() => {
      return [
        {
          text: task,
          isChecked: false,
          id: createId(),
        },
        ...taskList,
      ];
    });
    console.log(taskList);
    setTask("");
  };

  const taskItemHandleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      console.log(task);
      addTask();
      setTaskItemIsActive(false);
    } else {
      console.log("Please enter new task");
    }
    setTask("");
  };

  return (
    <div className="taskitem">
      <button className="taskitem__button" type="button" onClick={taskItemHandleClick}>
        + List Item
      </button>
      {taskItemIsActive && (
        <Form
          value={task}
          setValue={setTask}
          buttonName={"+"}
          subbitClickHandle={taskItemHandleSubmit}
          inputRef={inputRef}
        />
      )}
      <OneTaskContainer taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskItem;
