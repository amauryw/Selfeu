import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import theme from "../../../../theme";

export const Action = ({ name, onPress }) => {
  return (
    <ActionContainer onPress={onPress}>
      <ActionText>{name}</ActionText>
    </ActionContainer>
  );
};

const ActionContainer = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 10px;
  margin: 10px;
  height: 50px;
  background-color: ${theme.lightDarkBackground};
`;

const ActionText = styled.Text`
  font-size: 20;
  text-align: center;
  color: ${theme.darkText};
`;
