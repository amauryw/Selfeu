import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { useMyStore } from "../../module/me";

export const Home = () => {
  const { me, myMonthlyActions, myWeeklyActions } = useMyStore();
  return (
    <Container>
      <WelcomeText>Je suis {me.name}</WelcomeText>
      <MyWeeklyActionsContainer>
        {myWeeklyActions.length > 0 ? (
          myWeeklyActions.map(action => (
            <PersonalAction key={action.id}>{action.name}</PersonalAction>
          ))
        ) : (
          <WelcomeText>Bravo, tu as tout fait pour cette semaine !</WelcomeText>
        )}
      </MyWeeklyActionsContainer>
      <MyMonthlyActionsContainer>
        {myMonthlyActions.length > 0 ? (
          myMonthlyActions.map(action => (
            <PersonalAction key={action.id}>{action.name}</PersonalAction>
          ))
        ) : (
          <WelcomeText>Bravo, tu as tout fait pour ce mois !</WelcomeText>
        )}
      </MyMonthlyActionsContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;

const MyWeeklyActionsContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightDarkBackground};
`;

const MyMonthlyActionsContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightDarkBackground};
`;

const PersonalAction = styled.Text`
  font-size: 20px;
`;

const WelcomeText = styled.Text`
  font-size: 40;
  color: ${theme.lightText};
`;
