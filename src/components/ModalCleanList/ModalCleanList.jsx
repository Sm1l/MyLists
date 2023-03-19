//*react
import React, { useState } from "react";
//*redux
import { useDispatch } from "react-redux";
import { toggleModalIsVisible } from "../../store/modalSlice";
import { cleanCheckedTasks } from "../../store/listSlice";
//*helpers
import { setCookie, getCookie } from "../../helpers/cookie";
//*animation
import { motion } from "framer-motion";
import { modalVariants, overlayVariants } from "./animation";
//*scss
import "./modalcleanlist.scss";

const ModalCleanList = ({ list }) => {
  const listId = list.listId;
  const dispatch = useDispatch();
  const [cookieIsChecked, setCookieIsChecked] = useState(false);

  const closeModalHandleClick = () => {
    dispatch(toggleModalIsVisible());
    //todo ----------------------
    console.log(getCookie("clearListWithoutRequest"));
    //todo ----------------------
  };

  //*очищение отмеченных Task
  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanCheckedTasks({ listId }));
    dispatch(toggleModalIsVisible());
    cookieIsChecked && setCookie("clearListWithoutRequest", true, { secure: true, "max-age": 3600, samesite: "lax" });
  };

  const setCookieHandleClick = () => {
    setCookieIsChecked((prev) => !prev);
  };

  return (
    <motion.div
      className="modalcleanlist"
      initial="initial"
      animate="animate"
      exit="initial"
      variants={overlayVariants}
    >
      <motion.div className="modalcleanlist__container" initial="initial" animate="animate" variants={modalVariants}>
        <p className="modalcleanlist__text">{`Do you want to remove all completed items from ${list.list}?`}</p>
        <div className="modalcleanlist__checkboxcontainer">
          <label className="modalcleanlist__customcheckbox">
            <input
              type="checkbox"
              className="modalcleanlist__checkbox"
              id="modalcleanlist__checkbox"
              onChange={setCookieHandleClick}
            />
          </label>
          <label htmlFor="modalcleanlist__checkbox" className="modalcleanlist__label">
            Don’t ask me again
          </label>
        </div>
        <div className="modalcleanlist__buttonscontainer">
          <button className="modalcleanlist__button modalcleanlist__button_no" onClick={closeModalHandleClick}>
            No
          </button>
          <button className="modalcleanlist__button modalcleanlist__button_yes" onClick={cleanTasksHandleClick}>
            Yes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalCleanList;
