import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import "./AddTask.css";
export const AddTask = ({ isPromptActive, setIsPromptActive, setCount }) => {
  const [taskName, setTaskName] = useState("");
  const [isHidden, setIsHidden] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);
  const addTask = (e) => {
    {
      /*add validate*/
    }
    console.log(tasks.length);
    e.preventDefault();
  };
  return (
    <div
      className={
        isPromptActive ? "form-addTask active" : "form-addTask non-active"
      }
    >
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          name="name"
          placeholder="name of task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description of task"
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            setTasks([
              ...tasks,
              {
                name: taskName,
                description: taskDescription,
                status: "toDo",
                id: nanoid(),
              },
            ]);
            setIsPromptActive(!isPromptActive);
          }}
        >
          Add Task
        </button>
        <button
          onClick={() => {
            setIsPromptActive(!isPromptActive);
          }}
        >
          Hide
        </button>
      </form>
    </div>
  );
};
