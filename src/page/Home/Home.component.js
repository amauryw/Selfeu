import React, { useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import theme from "../../theme";
import { useMyStore } from "../../module/me";
import { MyTodos } from "../../components/MyTodos";

export const Home = () => {
  const { me, isLoading: isMyTodosLoading, loadMyMonthlyTodos } = useMyStore();

  useEffect(() => {
    loadMyMonthlyTodos();
  }, []);

  const myMonthlyTodos = [
    {
      id: 1,
      name: "Cuisine",
      color: "red",
      duration: 30,
      date: new Date()
    },
    {
      id: 2,
      name: "Salon",
      color: "blue",
      duration: 30,
      date: new Date()
    },
    {
      id: 3,
      name: "Qwack",
      color: "green",
      duration: 30,
      date: new Date()
    }
  ];

  const renderPersonalActions = () => {
    return <MyTodos cards={myMonthlyTodos} />;
    // if (isMyTodosLoading) {
    //   return <Loader color={theme.lightDarkBackground} size={40} />;
    // }

    // if (myMonthlyTodos.length <= 0) {
    //   return <EmptyText>Bravo, tu as tout fait pour ce mois !</EmptyText>;
    // }
    // return <MyTodos items={myMonthlyTodos} />;
  };

  return (
    <Container>
      <TextContainer>
        <HorizontalContainer>
          <WelcomeText>Je suis {me.name}</WelcomeText>
        </HorizontalContainer>
      </TextContainer>

      <MyMonthlyTodosContainer>
        {renderPersonalActions()}
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
  flex: 5;
  flex-direction: row;
`;

// level 2

const HorizontalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
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
