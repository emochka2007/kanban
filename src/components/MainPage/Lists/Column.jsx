import React from "react";
import s from "./Lists.module.css";
import { Card } from "../Card/Card";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

export const Column = ({ status, actionButton }) => {
  const { tasks } = useContext(TaskContext);
  const taskInColumn = tasks.filter((item) => item.status === status);
  return (
    <div className={s.listBlock}>
      <div className={s.listHeader}>
        <h1>
          {status} {taskInColumn.length}
        </h1>
        {actionButton}
      </div>
      <div className={s.listBody}>
        {tasks.map((item) => {
          return item.status === status ? (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              id={item.id}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};
