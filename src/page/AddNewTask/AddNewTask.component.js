import React from "react";
import styled from "styled-components";

import { createNewAction } from "../../api/api";

export const AddNewTask = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const createNewAction = async () => {
    await createNewAction();
  };

  return (
    <Container>
      <Button onPresss={goBack}>Retour</Button>
      <Button onPresss={createNewAction}>Do it</Button>
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
