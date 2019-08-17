import React, { useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import theme from "../../theme";
import { useMyStore } from "../../module/me";
import { MyTodos } from "../../components/MyTodos";
import { ChooseMe } from "../../components/ChooseMe";

export const Home = () => {
  const {
    isLoading: isMyTodosLoading,
    loadMyMonthlyTodos,
    myMonthlyTodos
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
    return <MyTodos cards={myMonthlyTodos} />;
  };

  return (
    <Container>
      <ChooseMeContainer>
        <ChooseMe />
      </ChooseMeContainer>

      <MyMonthlyTodosContainer>
        {renderPersonalActions()}
      </MyMonthlyTodosContainer>
    </Container>
  );
};

// level 0
const Container = styled.View`
  flex: 1;
  background-color: ${theme.darkBackground};
`;

// level 1
const ChooseMeContainer = styled.View`
  flex: 1;
`;
// level 1
const MyMonthlyTodosContainer = styled.View`
  flex: 5;
  flex-direction: row;
`;

const EmptyText = styled.Text`
  font-size: 20;
  color: ${theme.lightText};
`;

const Loader = styled(ActivityIndicator)`
  flex: 1;
`;
