import React, { createContext, useState } from "react";

export const ActionContext = createContext([{}, () => {}]);

const initialState = {
  filteredByUserActions: [],
  actions: [],
  filteringUserIds: [],
  isLoading: false
};

export const ActionContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <ActionContext.Provider value={[state, setState]}>
      {props.children}
    </ActionContext.Provider>
  );
};
