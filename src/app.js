// @flow
import React from "react";

import { Navigator } from "./navigator";
import { UserContextProvider } from "./module/user";
import { ActionContextProvider } from "./module/action";

const App = props => {
  return (
    <UserContextProvider>
      <ActionContextProvider>
        <Navigator />
      </ActionContextProvider>
    </UserContextProvider>
  );
};

export default App;
