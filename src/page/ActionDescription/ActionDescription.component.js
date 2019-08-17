import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import theme from "../../theme";

export const ActionDescription = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const action = props.navigation.getParam("action", null);
  return (
    <Container>
      <TitleText>{action.name}</TitleText>
      <DateText>Fait le: {action.date.toDateString()}</DateText>
      <DurationText>{action.duration} min !</DurationText>
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

const DateText = styled.Text`
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
  font-size: 20px;
  text-align: center;
`;
