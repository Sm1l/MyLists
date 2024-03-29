//*react
import React, { useState, useRef } from "react";
//*redux
import { useDispatch } from "react-redux";
import { addTaskToList } from "../../store/listSlice";
import { toggleInputIsActive } from "../../store/listSlice";
//*components
import Form from "../Form";
import TasksContainer from "../TasksContainer";
//*animation
import { motion, AnimatePresence } from "framer-motion";
import { taskItemVariants } from "./animation";
//*scss
import "./taskitem.scss";

const TaskItem = ({ list }) => {
  const dispatch = useDispatch();
  const storeInputIsActive = list.inputIsActive;
  const listId = list.listId;

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
    <motion.div className="taskitem" initial="initial" animate="animate" exit="initial" variants={taskItemVariants}>
      <button className="taskitem__button" type="button" onClick={taskItemHandleClick}>
        + List Item
      </button>
      <AnimatePresence>
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
      </AnimatePresence>
      <TasksContainer list={list} />
    </motion.div>
  );
};

export default TaskItem;
