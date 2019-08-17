import React from "react";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Home } from "./page/Home";
import { Tasks } from "./page/Tasks";
import { Actions } from "./page/Actions";
import { AddNewTask } from "./page/AddNewTask";
import theme from "./theme";
import TabIcons from "./components/Icon/TabIcons";
import { TabBar } from "./components/TabBar";

const tabNavigator = createBottomTabNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        tabBarIcon: TabIcons.home
      }
    },
    tasks: {
      screen: Tasks,
      navigationOptions: {
        title: "Tasks",
        tabBarIcon: TabIcons.tasks
      }
    },
    actions: {
      screen: Actions,
      navigationOptions: {
        title: "actions",
        tabBarIcon: TabIcons.actions
      }
    }
  },
  {
    initialRouteName: "home",
    tabBarComponent: TabBar,
    headerMode: "none",
    tabBarOptions: {
      inactiveTintColor: theme.main,
      activeTintColor: theme.lightDarkBackground,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: theme.lightDarkBackground
      }
    }
  }
);

export const Navigator = createStackNavigator(
  {
    launch: tabNavigator,
    addNewTask: AddNewTask
  },
  {
    headerMode: "none",
    initialRouteName: "launch"
  }
);
