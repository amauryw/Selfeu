import React, { createContext, useState } from "react";

export const MyContext = createContext([{}, () => {}]);

const initialState = {
  me: {
    name: "Amaury"
  },
  myMonthlyActions: [{ id: 1, name: "action 1" }, { id: 2, name: "action 2" }],
  myWeeklyActions: []
};

export const MyContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <MyContext.Provider value={[state, setState]}>
      {props.children}
    </MyContext.Provider>
  );
};
