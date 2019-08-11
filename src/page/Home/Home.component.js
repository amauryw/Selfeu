import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

export const Home = props => {
  const navToTask = () => {
    props.navigation.navigate("addNewTask");
  };

  return (
    <Container>
      <WelcomeText>Ajouter une nouvelle tache:</WelcomeText>
      <Button title="Add" onPress={navToTask} />
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
