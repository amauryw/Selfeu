import React from "react";
import styled from "styled-components";
import theme from "../../../../theme";
export const Action = props => {
  return (
    <ActionContainer>
      <ActionText>{props.action.name}</ActionText>
    </ActionContainer>
  );
};

const ActionContainer = styled.View`
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
