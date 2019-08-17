// @flow
import React from "react";

import { Navigator } from "./navigator";
import { UserContextProvider } from "./module/user";
import { ActionContextProvider } from "./module/action";
import { TaskContextProvider } from "./module/task";
import { MyContextProvider } from "./module/me";

const App = props => {
  return (
    <MyContextProvider>
      <UserContextProvider>
        <TaskContextProvider>
          <ActionContextProvider>
            <Navigator />
          </ActionContextProvider>
        </TaskContextProvider>
      </UserContextProvider>
    </MyContextProvider>
  );
};

export default App;
