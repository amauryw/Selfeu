import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import theme from "../../../../theme";

export const TodoItem = props => {
  return (
    <TodoContainer onPress={props.onPress} selected={props.selected}>
      <TodoTextName>{props.item.name}</TodoTextName>
    </TodoContainer>
  );
};

const TodoContainer = styled(TouchableOpacity)`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) =>
    selected ? theme.validated : theme.lightDarkBackground};
`;

const TodoTextName = styled.Text`
  color: ${theme.lightText};
`;
