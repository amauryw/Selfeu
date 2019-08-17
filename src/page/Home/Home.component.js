import React, { useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
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

  const renderPersonalActions = () => {
    if (isMyTodosLoading) {
      return <Loader color={theme.lightDarkBackground} size={40} />;
    }

    if (myMonthlyTodos.length <= 0) {
      return <EmptyText>Bravo, tu as tout fait pour ce mois !</EmptyText>;
    }
    return (
      <React.Fragment>
        {myMonthlyTodos.map(item => (
          <PersonalAction key={item.id}>{item.name}</PersonalAction>
        ))}
      </React.Fragment>
    );
  };
  return (
    <Container>
      <TextContainer>
        <HorizontalContainer>
          <WelcomeText>Je suis {me.name}</WelcomeText>
        </HorizontalContainer>
      </TextContainer>

      <MyMonthlyTodosContainer>
        <MyMonthlyTodosHorizontalContainer>
          {renderPersonalActions()}
        </MyMonthlyTodosHorizontalContainer>
      </MyMonthlyTodosContainer>
    </Container>
  );
};

// level 0
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;

// level 1
const TextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${theme.lightDarkBackground};
`;
// level 1
const MyMonthlyTodosContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

// level 2
const MyMonthlyTodosHorizontalContainer = styled.View`
  align-items: center;
  flex: 1;
`;

// level 2
const HorizontalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PersonalAction = styled.Text`
  font-size: 20px;
  color: ${theme.lightText};
`;

const WelcomeText = styled.Text`
  font-size: 40;
  color: ${theme.lightText};
`;

const EmptyText = styled.Text`
  font-size: 20;
  color: ${theme.lightText};
`;

const Loader = styled(ActivityIndicator)``;
