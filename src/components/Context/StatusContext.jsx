import React from "react";
import { useState } from "react";
export const StatusContext = React.createContext({
  status: ["toDo", "inProgress", "Done"],
  setStatusTask: (status) => {
    console.log(status);
  },
});

export const StatusProvider = ({ children }) => {
  const [statusTask, setStatusTask] = useState({
    status: [{ toDo: "toDo", inProgress: "inProgress", done: "done" }],
  });

  return (
    <StatusContext.Provider value={{ statusTask, setStatusTask }}>
      {children}
    </StatusContext.Provider>
  );
};
