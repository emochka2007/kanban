import React from "react";
import "./Lists.css";
import { useState } from "react";
export const InProgressList = ({ tasks }) => {
  //   const [count, setCount] = useState(tasks.length);
  return (
    <div className="list-block">
      <div className="list-header">
        <h1>In Progress</h1>
      </div>
      <div className="list-body"></div>
    </div>
  );
};
