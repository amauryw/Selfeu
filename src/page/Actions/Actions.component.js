import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Action } from "./components/Action";
import { Toggle } from "./components/Toggle";
import { useUserStore } from "../../module/user";
import { useActionStore } from "../../module/action";

export const Actions = () => {
  const { isLoading: isUserStoreLoading, users, loadUsers } = useUserStore();
  const {
    isLoading: isActionStoreLoading,
    filteredByUserActions,
    setFilteringUsersId,
    loadActions
  } = useActionStore();

  const [userSelection, setUserSelection] = useState(
    users.map(user => ({ ...user, selected: false }))
  );

  const toggleUser = userId => {
    const newUserSelect = userSelection.map(user =>
      user.id === userId ? { ...user, selected: !user.selected } : user
    );
    setUserSelection(newUserSelect);
    setFilteringUsersId(
      newUserSelect.filter(user => user.selected).map(user => user.id)
    );
  };

  useEffect(() => {
    loadUsers();
    loadActions();
  }, []);

  useEffect(() => {
    setUserSelection(users.map(user => ({ ...user, selected: false })));
  }, [users]);
  console.log("render");
  return (
    <Container>
      <ToggleContainer>
        {isUserStoreLoading ? (
          <LoadingText>Loading users ...</LoadingText>
        ) : (
          <Toggle userSelection={userSelection} onToggle={toggleUser} />
        )}
      </ToggleContainer>
      <ActionsContainer>
        {isActionStoreLoading ? (
          <LoadingText>Loading actions ...</LoadingText>
        ) : (
          filteredByUserActions.map(action => (
            <Action action={action} key={action.id} />
          ))
        )}
      </ActionsContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.darkBackground};
`;

const ActionsContainer = styled.ScrollView`
  flex: 5;
  background-color: ${theme.darkBackground};
`;
const ToggleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightDarkBackground};
  elevation: 4;
  border-radius: 5px;
`;

const LoadingText = styled.Text`
  color: white;
`;
