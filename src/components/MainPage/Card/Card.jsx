import React from "react";
import "./Card.css";
export const Card = ({
  title,
  description,
  changeTasks,
  id,
  tasks,
  statusContext,
  setCount,
}) => {
  console.log(statusContext);
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        className="card-delete"
        value={id}
        onClick={(e) => {
          tasks = tasks.filter((t) => t.id !== e.target.value);
          changeTasks(tasks);
          setCount(tasks.length);
        }}
      >
        X
      </button>
      {/* <select>
        {statusContext[0].map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select> */}
    </div>
  );
};
