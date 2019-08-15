import React from "react";
import { Icon } from "./";

const TAB_ICON_SIZE = 20;

const setTabIcon = iconName => ({ tintColor }) => {
  return <Icon name={iconName} color={tintColor} size={TAB_ICON_SIZE} />;
};

const TabIcons = {
  home: setTabIcon("face"),
  tasks: setTabIcon("face"),
  actions: setTabIcon("face")
};

export default TabIcons;
