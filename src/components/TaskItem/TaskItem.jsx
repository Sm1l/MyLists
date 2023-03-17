//*react
import React, { useState, useRef } from "react";
//*redux
import { useDispatch } from "react-redux";
import { addTaskToList } from "../../store/listSlice";
import { toggleInputIsActive } from "../../store/listSlice";
//*components
import Form from "../Form/Form";
import TasksContainer from "../TasksContainer/TasksContainer";
//*framer-motion
import { motion, AnimatePresence } from "framer-motion";
//*scss
import "./taskitem.scss";

const TaskItem = ({ list }) => {
  const dispatch = useDispatch();
  const storeInputIsActive = list.inputIsActive;
  const listId = list.listId;

  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const taskItemVariants = {
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        // scale: 1,
        // type: "just",
        // ease: "easeInOut",
        duration: 0.5,
      },
    },
    initial: {
      opacity: 0,
      height: 0,
      transition: {
        // scale: 0,
        // type: "just",
        // ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

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
