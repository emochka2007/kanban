import React, { useContext } from "react";
import s from "./Lists.module.css";
import { Card } from "../Card/Card";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskContext } from "../../Context/TaskContext";
import { nanoid } from "nanoid";
export const ToDoList = () => {
  const { tasks } = useContext(TaskContext);
  const [isPromptActive, setIsPromptActive] = useState(false);
  const showPrompt = () => {
    setIsPromptActive(!isPromptActive);
  };
  const toDoTasks = tasks.filter((item) => item.status === "toDo");
  return (
    <div className={s.listBlock}>
      <div className={s.listHeader}>
        <h1>To Do ({toDoTasks.length})</h1>
        <button
          onClick={() => {
            showPrompt();
          }}
        >
          Add
        </button>
      </div>
      <div className={s.listBody}>
        {toDoTasks.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
