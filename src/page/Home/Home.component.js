import React from "react";
import styled from "styled-components";

export const Home = props => {
  const navToTask = () => {
    props.navigation.navigate("addNewTask");
  };

  return (
    <Container>
      <WelcomeText>Ajouter une nouvelle tache:</WelcomeText>
      <Button onPresss={navToTask}>Add</Button>
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
