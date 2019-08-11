import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Navigation } from "react-native-navigation";

import { Home } from "./Home";
import { AddNewTask } from "./AddNewTask";
import { Tasks } from "./Tasks";
import { Actions } from "./Actions";

export function registerScreens() {
  Navigation.registerComponent("Home", () => gestureHandlerRootHOC(Home));
  Navigation.registerComponent("AddNewTask", () =>
    gestureHandlerRootHOC(AddNewTask)
  );
  Navigation.registerComponent("Tasks", () => gestureHandlerRootHOC(Tasks));
  Navigation.registerComponent("Actions", () => gestureHandlerRootHOC(Actions));
}
