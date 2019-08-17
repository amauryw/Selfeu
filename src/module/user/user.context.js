import React, { createContext, useState } from "react";

export const UserContext = createContext([{}, () => {}]);

const initialState = {
  users: [],
  isLoading: false
};

export const UserContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
