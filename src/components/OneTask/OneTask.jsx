import React from "react";

import "./onetask.scss";

function OneTask({ text, isChecked }) {
  return (
    <div className="onetask">
      <input type="checkbox" className="onetask__checkbox" />
      <p className="onetask__text">{text}</p>
      <p>{`${isChecked}`}</p>
    </div>
  );
}

export default OneTask;
