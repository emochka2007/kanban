import React from "react";
import { nanoid } from "nanoid";
import { useState, useCallback } from "react";
import { TODO } from "../../constants";
export const TaskContext = React.createContext({
  tasks: [],
  addTask: (_title, _description) => null,
  deleteTask: (_id) => null,
  clearTasks: () => null,
  changeTaskStatus: (e, _id) => null,
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { name: "1", description: "1", status: "toDo", id: nanoid() },
    { name: "2", description: "2", status: "inProgress", id: nanoid() },
    { name: "3", description: "3", status: "done", id: nanoid() },
  ]);

  const changeTaskStatus = useCallback((e, _id) => {
    const changedTasks = tasks.map((item) =>
      item.id === _id ? { ...item, status: e.currentTarget.value } : item
    );
    console.log(changedTasks);
    setTasks(changedTasks);
  });
  const clearTasks = useCallback(() => {
    setTasks([]);
  }, [setTasks]);

  const addTask = useCallback(
    (title, description) => {
      console.log("CALLBACK");
      setTasks((prevState) => {
        return [
          ...prevState,
          { name: title, description: description, status: TODO, id: nanoid() },
        ];
      });
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prevState) => {
        return prevState.filter((task) => task.id !== id);
      });
    },
    [setTasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        clearTasks,
        changeTaskStatus,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
