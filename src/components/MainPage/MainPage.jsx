import React, { useContext } from "react";
import { DoneList } from "./Lists/DoneList";
import { InProgressList } from "./Lists/InProgressList";
import { ToDoList } from "./Lists/ToDoList";
import { useState } from "react";
import { TaskContext } from "../../components/Context/TaskContext";
import "./MainPage.css";
export const MainPage = () => {
  console.log(TaskContext);
  const { tasks, setTasks } = useContext(TaskContext);
  const [count, setCount] = useState(tasks.length);
  return (
    <div className="lists-container">
      {/*optimize?*/}
      <ToDoList count={count} />
      <InProgressList count={count} />
      <DoneList count={count} />
    </div>
  );
};
