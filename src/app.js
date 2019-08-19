// @flow
import React from "react";

import { Navigator } from "./navigator";
import { MyContextProvider } from "./module/me";
const App = props => {
  return (
    <MyContextProvider>
      <Navigator />;
    </MyContextProvider>
  );
};

export default App;
