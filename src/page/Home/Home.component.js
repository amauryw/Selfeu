import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export const Home = () => {
  return (
    <Container>
      <WelcomeText>Ceci est la Home</WelcomeText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;
const WelcomeText = styled.Text`
  font-size: 40;
  color: ${theme.lightText};
`;
