import React, { useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import { useMyStore } from "../../module/me";
import theme from "../../theme";
import { useUserStore } from "../../module/user";
import { UserBlock } from "./UserBlock";

export const ChooseMe = () => {
  const { me, setMe } = useMyStore();
  const { users, loadUsers, isLoading: isUsersLoading } = useUserStore();

  useEffect(() => {
    loadUsers();
  }, []);

  const renderUsersBlock = () => {
    if (isUsersLoading) {
      return <Loader color={theme.lightDarkBackground} size={40} />;
    }
    if (users.length <= 0) {
      return <ErrorText>Rien ici</ErrorText>;
    }
    return (
      <UsersBlockContainer>
        {users.map(user => (
          <UserBlock
            key={user.id}
            name={user.name}
            iconName={user.iconName}
            selected={user.id === me.id}
            onPress={() => setMe(user)}
          />
        ))}
      </UsersBlockContainer>
    );
  };
  return <Container>{renderUsersBlock()}</Container>;
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.lightDarkBackground};
`;

const Loader = styled(ActivityIndicator)``;
const ErrorText = styled.Text``;

const UsersBlockContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
