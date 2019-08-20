import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

export const DoItButton = ({ actionId, navigation }) => {
  const navToDoTask = () => {
    navigation.navigate("doTask", { actionId });
  };
  return <Button title="title" onPress={navToDoTask} />;
};
