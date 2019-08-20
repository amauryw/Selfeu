import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import theme from "../../theme";
import { useActionStore } from "../../module/action";

export const DoTask = props => {
  const { isLoading, hasErrored, executeAction } = useActionStore();

  const actionId = props.navigation.getParam("actionId", null);

  const goBack = () => {
    props.navigation.goBack();
  };

  const validateAction = async () => {
    try {
      await executeAction(actionId, true);
      goBack();
    } catch (error) {
      // nothing to see here
    }
  };

  return (
    <Container>
      <TitleText>Confirmer? </TitleText>
      <Button title="Do it" onPress={validateAction} isLoading={isLoading} />
      <DurationText>{hasErrored ? "error" : "ARTOUR PICCI"}</DurationText>
      <Button title="retour" onPress={goBack} isLoading={isLoading} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.darkBackground};
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
