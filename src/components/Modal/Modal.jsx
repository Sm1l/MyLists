//*react
import React from "react";
//*redux
import { useDispatch, useSelector } from "react-redux";
//*scss
import "./modal.scss";

const Modal = ({ listId }) => {
  const store = useSelector((state) => state.lists.lists);
  const listItem = store.find((item) => item.listId === listId);

  return (
    <div className="modal">
      <div className="modal__container">
        {/* <p className="modal__text">{`Do you want to remove all completed items from ${listItem.list}?`}</p> */}
        <p className="modal__text">{`Do you want to remove all completed items from To-Do?`}</p>
        <div className="modal__checkboxcontainer">
          <label className="modal__customcheckbox">
            <input type="checkbox" className="modal__checkbox" id="modal__checkbox" />
          </label>
          <label htmlFor="modal__checkbox" className="modal__label">
            Don’t ask me again
          </label>
        </div>
        <div className="modal__buttonscontainer">
          <button className="modal__button modal__button_no">No</button>
          <button className="modal__button modal__button_yes">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
