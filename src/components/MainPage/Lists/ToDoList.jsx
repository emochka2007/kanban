import React, { useContext } from "react";
import "./Lists.css";
import { Card } from "../Card/Card";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskContext } from "../../Context/TaskContext";
import { nanoid } from "nanoid";
export const ToDoList = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isPromptActive, setIsPromptActive] = useState(false);
  const showPrompt = () => {
    setIsPromptActive(!isPromptActive);
  };
  const toDoTasks = tasks.filter((item) => item.status === "toDo");
  const [count, setCount] = useState(toDoTasks.length);
  return (
    <div className="list-block">
      <AddTask
        isPromptActive={isPromptActive}
        setIsPromptActive={setIsPromptActive}
      />
      <div className="list-header">
        <h1>To Do ({count})</h1>
        <button
          onClick={() => {
            showPrompt();
          }}
        >
          Add
        </button>
      </div>
      <div className="list-body">
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
