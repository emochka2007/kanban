import React from "react";
import { Column, AddTask } from "./Lists";
import { useState } from "react";

import { TODO, INPR, DONE } from "../../constants";
import { IconButton } from "../IconButton/IconButton";

import s from "./MainPage.module.css";
export const MainPage = () => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  return (
    <div className={s.listsContainer}>
      <AddTask
        isPromptActive={isAddTaskVisible}
        setIsPromptActive={setIsAddTaskVisible}
      />
      <Column
        status={TODO}
        actionButton={
          <IconButton icon="add" onClick={() => setIsAddTaskVisible(true)} />
        }
      />
      <Column status={INPR} />
      <Column status={DONE} />
    </div>
  );
};
