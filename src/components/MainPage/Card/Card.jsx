import React from "react";
import s from "./Card.module.css";
import { TaskContext } from "../../Context/TaskContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { STATUSES } from "../../../constants/statuses";
import { ReactComponent as TrashIcon } from "../../../svgs/TrashIcon.svg";
export const Card = ({ title, description, id }) => {
  const { tasks, setTasks, changeTaskStatus, deleteTask } = useContext(
    TaskContext
  );

  return (
    <div className={s.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <select
        className={s.statusSelector}
        onChange={(e) => {
          changeTaskStatus(e, id);
        }}
      >
        {STATUSES.map((item) =>
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
        className={s.cardDelete}
        onClick={() => {
          deleteTask(id);
        }}
      >
        <TrashIcon />
      </button>
    </div>
  );
};
