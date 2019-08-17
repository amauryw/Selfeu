import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import theme from "../../theme";
import { Action } from "./components/Action";
import { Toggle } from "./components/Toggle";
import { useUserStore } from "../../module/user";
import { useActionStore } from "../../module/action";

export const Actions = props => {
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

  const navToActionDescription = action => {
    props.navigation.navigate("actionDescription", { action });
  };

  return (
    <Container>
      <ToggleContainer>
        {isUserStoreLoading ? (
          <LoadingContainer>
            <Loader color={theme.main} size={40} />
          </LoadingContainer>
        ) : (
          <Toggle userSelection={userSelection} onToggle={toggleUser} />
        )}
      </ToggleContainer>
      <ActionsContainer>
        {isActionStoreLoading ? (
          <LoadingContainer>
            <Loader color={theme.lightDarkBackground} size={100} />
          </LoadingContainer>
        ) : (
          <ScrollViewContainer>
            {filteredByUserActions.map(action => (
              <Action
                name={action.name}
                key={action.id}
                onPress={() => navToActionDescription(action)}
              />
            ))}
          </ScrollViewContainer>
        )}
      </ActionsContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.darkBackground};
`;

const ActionsContainer = styled.View`
  flex: 5;
  flex-direction: row;
  background-color: ${theme.darkBackground};
  justify-content: center;
`;

const ToggleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightDarkBackground};
  elevation: 4;
  border-radius: 5px;
`;
const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Loader = styled(ActivityIndicator)``;
