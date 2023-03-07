import React, { useState, useCallback } from "react";
import { useContext, useRef } from "react";
import { TaskContext } from "../../Context/TaskContext";
import OutsideClickHandler from "react-outside-click-handler";
import s from "./AddTask.module.css";
// import styled from "styled-components";
import cx from "classnames";
import { useEffect } from "react";

// const useOutsideAlerter = (ref, onChange) => {
//   const [isPromptActive, setIsPromptActive] = useState(false);
//   const toggleVisibility = useCallback(() => {
//     setIsPromptActive(!isPromptActive);
//     onChange && onChange(!isPromptActive);
//   }, [onChange, isPromptActive]);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isPromptActive && !ref.current.contains(event.target)) {
//         toggleVisibility();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isPromptActive, ref, toggleVisibility]);

//   return [isPromptActive, toggleVisibility];
// };

export const AddTask = ({ isPromptActive, setIsPromptActive }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const submitHandler = (e) => {
    //eslint-disable-next-line
    {
      /*add validate*/
    }
    e.preventDefault();
    addTask(taskName, taskDescription);
    setIsPromptActive(!isPromptActive);
    // toggleVisibility();
  };
  return (
    <div
      className={cx({
        [s.overlay]: isPromptActive,
        [s.displayNone]: !isPromptActive,
      })}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          isPromptActive && setIsPromptActive(!isPromptActive);
        }}
      >
        <div
          className={cx(s.formAddTask, {
            [s.active]: isPromptActive,
            [s.nonActive]: !isPromptActive,
          })}
        >
          <form onSubmit={submitHandler}>
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
            <button type="submit">Add Task</button>
            <button
              type="button"
              onClick={() => setIsPromptActive(!isPromptActive)}
            >
              Hide
            </button>
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
