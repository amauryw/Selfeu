import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import theme from "../../../../theme";

export const Task = props => {
  return (
    <TaskContainer onPress={props.onPress}>
      <WelcomeText>{props.label}</WelcomeText>
    </TaskContainer>
  );
};

const TaskContainer = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 10px;
  margin: 10px;
  background-color: ${theme.lightDarkBackground};
`;

const WelcomeText = styled.Text`
  flex: 1;
  font-size: 40;
  text-align: center;
  color: ${theme.darkText};
`;
