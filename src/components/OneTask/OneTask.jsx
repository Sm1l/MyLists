import React from "react";

import "./onetask.scss";

function OneTask({ text, isChecked, id, toggleTaskChecked }) {
  return (
    <div className="onetask">
      <label className="onetask__label">
        <input
          className="onetask__checkbox"
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleTaskChecked(id)}
        />
      </label>
      <label className={!isChecked ? "onetask__text" : "onetask__text onetask__text_active"} htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

export default OneTask;
