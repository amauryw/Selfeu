import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import theme from "../../theme";

export const TaskDescription = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const task = props.navigation.getParam("task", null);
  return (
    <Container>
      <TitleText>{task.name}</TitleText>
      <DescriptionText>{task.description}</DescriptionText>
      <DurationText>{task.duration} min !</DurationText>
      <Button title="retour" onPress={goBack} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.darkBackground};
`;

const DescriptionText = styled.Text`
  color: ${theme.lightText};
  font-size: 30px;
  text-align: center;
`;
const TitleText = styled.Text`
  color: ${theme.main};
  font-size: 40px;
  text-align: center;
`;
const DurationText = styled.Text`
  color: ${theme.validated};
  font-size: 60px;
  text-align: center;
`;
