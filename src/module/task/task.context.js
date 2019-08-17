import React, { createContext, useState } from "react";

export const TaskContext = createContext([{}, () => {}]);

const initialState = {
  tasks: [],
  isLoading: false
};

export const TaskContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <TaskContext.Provider value={[state, setState]}>
      {props.children}
    </TaskContext.Provider>
  );
};
