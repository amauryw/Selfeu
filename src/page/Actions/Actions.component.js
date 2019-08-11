import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getActionById } from "../../api/api";

export const Actions = () => {
  const [actions, setActions] = useState([]);
  const [selectedUser] = useState(0);

  useEffect(async () => {
    const result = await getActionById(selectedUser);
    setActions(result);
  }, [selectedUser]);

  return (
    <Container>
      {actions.map(action => (
        <Container>
          <ActionText>{action.name}</ActionText>
        </Container>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ActionText = styled.Text`
  font-size: 40;
`;
