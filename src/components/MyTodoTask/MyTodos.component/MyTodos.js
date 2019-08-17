import React from "react";
import theme from "../../../theme";
import styled from "styled-components";

export const MyTodos = props => (
  <Container>
    {props.items.map(item => (
      <Cards key={item.id}>{item.name}</Cards>
    ))}
  </Container>
);

// level 2
const Container = styled.View`
  align-items: center;
  flex: 1;
`;
const Cards = styled.Text`
  font-size: 20px;
  color: ${theme.lightText};
`;
