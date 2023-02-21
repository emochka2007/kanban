import React from "react";
import "./Card.css";
import { TaskContext } from "../../Context/TaskContext";
import { useContext, useState } from "react";
import { nanoid } from "nanoid";
export const Card = ({ title, description, id }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [statuses, setStatuses] = useState(["toDo", "inProgress", "done"]);
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <select
        className="status-selector"
        onChange={(e) => {
          const changedTasks = tasks.map((item) =>
            item.id === id ? { ...item, status: e.currentTarget.value } : item
          );
          console.log(changedTasks);
          setTasks(changedTasks);
        }}
      >
        {statuses.map((item) =>
          item === tasks.find((item) => item.id === id).status ? (
            <option key={nanoid()} value={item} defaultValue={item}>
              {item}
            </option>
          ) : (
            <option key={nanoid()} value={item}>
              {item}
            </option>
          )
        )}
      </select>
      <button
        className="card-delete"
        value={id}
        onClick={(e) => {
          const tasksAfterDelete = tasks.filter(
            (t) => t.id !== e.currentTarget.value
          );
          tasksAfterDelete.length < 1
            ? setTasks([])
            : setTasks(tasksAfterDelete);
        }}
      >
        <svg
          className="trash-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#fff"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </div>
  );
};
