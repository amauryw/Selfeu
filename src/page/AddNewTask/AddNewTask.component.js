import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { createNewAction } from "../../api/api";

export const AddNewTask = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const createNewAction2 = async () => {
    await createNewAction();
  };

  return (
    <Container>
      <Button title="retour" onPress={goBack}>
        Retour
      </Button>
      <Button title="Do it" onPress={createNewAction2}>
        Do it
      </Button>
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
