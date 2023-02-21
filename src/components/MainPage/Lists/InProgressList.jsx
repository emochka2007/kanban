import React from "react";
import "./Lists.css";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { Card } from "../Card/Card";

export const InProgressList = ({ count }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  return (
    <div className="list-block">
      <div className="list-header">
        <h1>In Progress {count}</h1>
      </div>
      <div className="list-body">
        {tasks.map((item) => {
          return item.status === "inProgress" ? (
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
