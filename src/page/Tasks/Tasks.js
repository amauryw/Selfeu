import React from "react";
import styled from "styled-components";
import { getAvailableTasks } from "../../api/api";

export const Tasks = () => {
  const tasks = getAvailableTasks();

  return (
    <Container>
      {tasks.map(task => (
        <WelcomeText>{task.name}</WelcomeText>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const WelcomeText = styled.Text`
  font-size: 40;
`;
