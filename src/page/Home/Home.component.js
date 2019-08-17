import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { useMyStore } from "../../module/me";

export const Home = () => {
  const {
    me,
    myMonthlyTodos,
    isLoading: isMyTodosLoading,
    loadMyMonthlyTodos
  } = useMyStore();

  useEffect(() => {
    loadMyMonthlyTodos();
  }, []);

  return (
    <Container>
      <WelcomeText>Je suis {me.name}</WelcomeText>

      <MyMonthlyTodosContainer>
        {myMonthlyTodos.length > 0 ? (
          myMonthlyTodos.map(action => (
            <PersonalAction key={action.id}>{action.name}</PersonalAction>
          ))
        ) : (
          <WelcomeText>Bravo, tu as tout fait pour ce mois !</WelcomeText>
        )}
      </MyMonthlyTodosContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;

const MyMonthlyTodosContainer = styled.View`
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
