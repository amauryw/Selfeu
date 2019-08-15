import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { createNewAction } from "../../api/api";
import theme from "../../theme";

export const AddNewTask = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const createNewAction2 = async () => {
    await createNewAction();
  };

  const task = props.navigation.getParam("task", null);
  return (
    <Container>
      <Button title={task.name} onPress={goBack} />
      <Button title="Do it" onPress={createNewAction2} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;
