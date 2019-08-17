import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { useMyStore } from "../../module/me";
import { mapComponent } from "../../components/mapComponent";

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
      <TextContainer>
        <HorizontalContainer>
          <WelcomeText>Je suis {me.name}</WelcomeText>
        </HorizontalContainer>
      </TextContainer>

      <MyMonthlyTodosContainer>
        <MyMonthlyTodosHorizontalContainer>
          {/* do not reuse this component, that's painful for nothing */}
          {mapComponent(
            myMonthlyTodos,
            personalAction,
            isMyTodosLoading,
            emptyComponent
          )}
        </MyMonthlyTodosHorizontalContainer>
      </MyMonthlyTodosContainer>
    </Container>
  );
};

const personalAction = props => (
  <PersonalAction>{props.item.name}</PersonalAction>
);

const emptyComponent = () => (
  <EmptyText>Bravo, tu as tout fait pour ce mois !</EmptyText>
);

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
