import React from "react";

import IcoIcon from "react-native-vector-icons/MaterialIcons";

export const Icon = props => (
  <IcoIcon name={props.name} size={props.size} color={props.color} />
);
