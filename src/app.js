// @flow
import React from "react";

import { Navigator } from "./navigator";
import { UserContextProvider } from "./module/user";
import { ActionContextProvider } from "./module/action";
import { MyContextProvider } from "./module/me";

const App = props => {
  return (
    <MyContextProvider>
      <UserContextProvider>
        <ActionContextProvider>
          <Navigator />
        </ActionContextProvider>
      </UserContextProvider>
    </MyContextProvider>
  );
};

export default App;
