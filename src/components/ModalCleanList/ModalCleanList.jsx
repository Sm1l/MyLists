//*react
import React, { useState } from "react";
//*redux
import { useDispatch } from "react-redux";
import { toggleModalIsVisible } from "../../store/modalSlice";
import { cleanCheckedTasks } from "../../store/listSlice";
//*helpers
import { setCookie, getCookie } from "../../helpers/cookie";
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
    <div className="modalcleanlist">
      <div className="modalcleanlist__container">
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
      </div>
    </div>
  );
};

export default ModalCleanList;
