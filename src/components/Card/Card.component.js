import React from "react";
import styled from "styled-components";

export const CARD_WIDTH = 140;
export const CARD_HEIGHT = 100;

const fakeItem = {
  id: 0,
  name: "No todo selected",
  color: "#f0f"
};
export const Card = props => {
  const item = props.item ? props.item : fakeItem;
  return (
    <Positioner>
      <CardContainer color={item.color}>
        <NameText>{item.name}</NameText>
      </CardContainer>
    </Positioner>
  );
};

const Positioner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.View`
  align-items: center;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  background-color: ${({ color }) => (color ? color : "red")};
  border-radius: 5px;
`;

const NameText = styled.Text`
  color: white;
`;
