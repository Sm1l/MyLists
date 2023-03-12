//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
import { toggleModalIsVisible } from "../../store/modalSlice";
import { cleanCheckedTasks } from "../../store/listSlice";
//*scss
import "./modalcleanlist.scss";

const ModalCleanList = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);
  const dispatch = useDispatch();

  const closeModalHandleClick = () => {
    dispatch(toggleModalIsVisible({}));
  };

  //*очищение отмеченных Task
  const cleanTasksHandleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanCheckedTasks({ listId }));
  };

  return (
    <div className="modalcleanlist">
      <div className="modalcleanlist__container">
        {/* <p className="modalcleanlist__text">{`Do you want to remove all completed items from ${listItem.list}?`}</p> */}
        <p className="modalcleanlist__text">{`Do you want to remove all completed items from To-Do?`}</p>
        <div className="modalcleanlist__checkboxcontainer">
          <label className="modalcleanlist__customcheckbox">
            <input type="checkbox" className="modalcleanlist__checkbox" id="modalcleanlist__checkbox" />
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
