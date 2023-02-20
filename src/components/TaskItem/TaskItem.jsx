import React, { useState } from "react";
import "./taskitem.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const TaskItem = () => {
  const [task, setTask] = useState("");
  const [listItemIsActive, setListItemIsActive] = useState(false);

  const taskItemHandleClick = (e) => {
    console.log("button", e.target);
    if (!listItemIsActive) {
      e.target.classList.add("taskitem_active");
    } else {
      e.target.classList.remove("taskitem_active");
    }
    setListItemIsActive(!listItemIsActive);
  };
  const taskItemHandleSubmit = (e) => {
    e.preventDefault();
    console.log("taskItemHandleSubmit");
  };

  return (
    <div className="taskitem">
      <button className="taskitem__button" type="button" onClick={taskItemHandleClick}>
        + List Item
      </button>
      {listItemIsActive && (
        <form action="" className="taskitem__form" onSubmit={taskItemHandleSubmit}>
          <Input value={task} setValue={setTask} placeholder="+ New Task" />
          {/* <Button name="+ Add" type="submit" value={task} /> */}
        </form>
      )}
    </div>
  );
};

export default TaskItem;
