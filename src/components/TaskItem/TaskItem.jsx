import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskToList } from "../../store/listSlice";

import Form from "../Form/Form";
import OneTaskContainer from "../OneTaskContainer/OneTaskContainer";

import "./taskitem.scss";

const TaskItem = ({ listId }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);

  // console.log("listItem: ", listItem);

  // console.log("store:", store);
  // console.log("store.tasks:", store[0].tasks);

  const [task, setTask] = useState("");
  const inputRef = useRef();
  const [taskItemIsActive, setTaskItemIsActive] = useState(false); //!вместо этого использовать store. dispatch

  // const list = store.find((item) => item.listId === listId);

  // const [taskList, setTaskList] = useState(() => {
  //   //todo нужно поднимать
  //   return JSON.parse(localStorage.getItem("MyLists.taskList")) || [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("MyLists.taskList", JSON.stringify(taskList));
  // }, [taskList]);

  const taskItemHandleClick = (e) => {
    if (!taskItemIsActive) {
      e.target.classList.add("taskitem_active");
    } else {
      e.target.classList.remove("taskitem_active");
    }
    setTaskItemIsActive(!taskItemIsActive);
  };

  //* добавление task

  const addTaskItem = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTaskToList({ task, listId })); //todo нужно в payload передавать taskId
    } else {
      console.log("Please enter new task");
    }
    setTask("");
    setTaskItemIsActive(false);
    //!isActive=false
  };

  // const addTask = (e) => {
  //   e.preventDefault();
  //   if (task.trim()) {
  //     setTaskList(() => {
  //       return [
  //         {
  //           text: task,
  //           isChecked: false,
  //           id: createId(),
  //         },
  //         ...taskList,
  //       ];
  //     });
  //     setTaskItemIsActive(false);
  //   } else {
  //     console.log("Please enter new task");
  //   }
  //   setTask("");
  // };

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
          placeholder="New Item"
          submitClickHandle={addTaskItem}
          inputRef={inputRef}
        />
      )}
      {/* <OneTaskContainer taskList={taskList} setTaskList={setTaskList} /> */}
      {/* <OneTaskContainer taskList={store[0].tasks} /> */}
      <OneTaskContainer listId={listId} />
    </div>
    //todo здесь нужно передавать нужный tasklist или выше
  );
};

export default TaskItem;
