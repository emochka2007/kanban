import React, { useContext } from "react";
import "./Lists.css";
import { Card } from "../Card/Card";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { nanoid } from "nanoid";
import { StatusContext } from "../../Context/StatusContext";
export const ToDoList = ({ tasks, changeTasks }) => {
  const [count, setCount] = useState(tasks.length);
  const [isPromptActive, setIsPromptActive] = useState(false);
  const showPrompt = () => {
    setIsPromptActive(!isPromptActive);
  };
  const { statusTask, setStatusTask } = useContext(StatusContext);
  console.log(statusTask);
  return (
    <div className="list-block">
      <AddTask
        changeTasks={changeTasks}
        tasks={tasks}
        isPromptActive={isPromptActive}
        setIsPromptActive={setIsPromptActive}
        setCount={setCount}
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
        {tasks.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              changeTasks={changeTasks}
              id={item.id}
              tasks={tasks}
              statusContext={statusTask}
              setCount={setCount}
            />
          );
        })}
      </div>
    </div>
  );
};
