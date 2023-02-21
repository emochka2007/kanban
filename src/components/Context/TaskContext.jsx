import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
export const TaskContext = React.createContext({
  tasks: [],
  setTasks: (tasks) => {
    console.log(tasks);
  },
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { name: "1", description: "1", status: "toDo", id: nanoid() },
    { name: "2", description: "2", status: "inProgress", id: nanoid() },
    { name: "3", description: "3", status: "done", id: nanoid() },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
