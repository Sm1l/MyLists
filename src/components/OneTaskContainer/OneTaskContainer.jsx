import React from "react";
import OneTask from "../OneTask/OneTask";

import "./onetaskcontainer.scss";

function OneTaskContainer({ taskList }) {
  return (
    <div className="onetaskcontainer">
      {taskList.map((item) => {
        return <OneTask key={item.id} text={item.text} isChecked={item.isChecked} />;
      })}
    </div>
  );
}

export default OneTaskContainer;
