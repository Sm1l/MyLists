//*react
import React, { useState, useRef } from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { addTaskToList } from "../../store/listSlice";
import { toggleInputIsActive } from "../../store/listSlice";
//*components
import Form from "../Form/Form";
import OneTaskContainer from "../OneTaskContainer/OneTaskContainer";
//*scss
import "./taskitem.scss";

const TaskItem = ({ listId }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.lists.lists);
  const storeInputIsActive = store.find((item) => item.listId === listId).inputIsActive;

  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  //* toggle input + input focus
  const taskItemHandleClick = () => {
    dispatch(toggleInputIsActive({ listId }));
    !storeInputIsActive &&
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
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
    dispatch(toggleInputIsActive({ listId }));
  };

  return (
    <div className="taskitem">
      <button className="taskitem__button" type="button" onClick={taskItemHandleClick}>
        + List Item
      </button>
      {storeInputIsActive && (
        <Form
          value={task}
          setValue={setTask}
          buttonName={"+"}
          placeholder="New Item"
          submitClickHandle={addTaskItem}
          inputRef={inputRef}
        />
      )}
      <OneTaskContainer listId={listId} />
    </div>
  );
};

export default TaskItem;
