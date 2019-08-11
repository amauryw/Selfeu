import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Home } from "./page/Home";
import { Tasks } from "./page/Tasks";
import { Actions } from "./page/Actions";
import { AddNewTask } from "./page/AddNewTask";

const tabNavigator = createBottomTabNavigator(
  {
    home: Home,
    tasks: Tasks,
    ations: Actions
  },
  {
    initialRouteName: "home"
  }
);

export const Navigator = createStackNavigator(
  {
    launch: tabNavigator,
    addNewTask: AddNewTask
  },
  {
    initialRouteName: "launch"
  }
);
