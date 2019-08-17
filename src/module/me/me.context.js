import React, { createContext, useState } from "react";

export const MyContext = createContext([{}, () => {}]);

const initialState = {
  me: {
    id: 1,
    name: "Amaury"
  },
  myMonthlyTodos: [],
  isLoading: false
};

export const MyContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <MyContext.Provider value={[state, setState]}>
      {props.children}
    </MyContext.Provider>
  );
};
