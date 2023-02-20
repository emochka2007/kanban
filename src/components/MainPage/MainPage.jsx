import React from "react";
import { DoneList } from "./Lists/DoneList";
import { InProgressList } from "./Lists/InProgressList";
import { ToDoList } from "./Lists/ToDoList";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./MainPage.css";
export const MainPage = () => {
  const [allTasks, setAllTasks] = useState([
    { name: "test", description: "test", status: "toDo", id: nanoid() },
    { name: "new", description: "new", status: "inProgress", id: nanoid() },
    { name: "del", description: "del", status: "done", id: nanoid() },
  ]);
  return (
    <div className="lists-container">
      <ToDoList tasks={allTasks} changeTasks={setAllTasks} />
      <InProgressList />
      <DoneList />
    </div>
  );
};
