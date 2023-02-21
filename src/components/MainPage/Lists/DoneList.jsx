import React from "react";
import "./Lists.css";
import { Card } from "../Card/Card";
import { useState, useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
export const DoneList = ({ count }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <div className="list-block">
      <div className="list-header">
        <h1>Done {count}</h1>
      </div>
      <div className="list-body">
        {tasks.map((item) => {
          return item.status === "done" ? (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              id={item.id}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};
