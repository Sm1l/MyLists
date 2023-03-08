import React from "react";
import OneTask from "../OneTask/OneTask";
import { toggleTaskIsChecked } from "../../store/listSlice";

import "./onetaskcontainer.scss";
import { useSelector, useDispatch } from "react-redux";

function OneTaskContainer({ listId }) {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const taskList = listItem.tasks;
  // console.log("1", taskList);

  // const dispatch = useDispatch();

  // const toggleTask = () => {
  //   dispatch(toggleTaskIsChecked({ listId }));
  // };
  //!!!!!
  // const toggleTaskChecked = (id) => {
  //   setTaskList(
  //     taskList.map((item) => {
  //       if (item.id !== id) return item;
  //       return { ...item, isChecked: !item.isChecked };
  //     })
  //   );
  // };

  return (
    <div className="onetaskcontainer">
      {taskList?.map((item) => {
        return (
          <OneTask
            key={item.taskId}
            task={item.task}
            isChecked={item.taskIsChecked}
            taskId={item.taskId}
            // toggleTaskChecked={toggleTask}
            listId={listId}
            // toggleTaskChecked={toggleTaskChecked(item.id)}
          />
        );
      })}
    </div>
  );
}

export default OneTaskContainer;
