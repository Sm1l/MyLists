//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import OneTask from "../OneTask/OneTask";
//*scss
import "./onetaskcontainer.scss";

function OneTaskContainer({ listId }) {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const taskList = listItem.tasks;

  return (
    <div className="onetaskcontainer">
      {taskList?.map((item) => {
        return (
          <OneTask
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

export default OneTaskContainer;
