import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import theme from "../../../theme";
import { Icon } from "../../Icon";

const USER_BLOCK_ICON_SIZE = 50;

export const UserBlock = ({ name, selected, onPress, iconName }) => {
  return (
    <UserContainer selected={selected} onPress={onPress}>
      <Icon
        name={selected ? iconName : "face"}
        size={USER_BLOCK_ICON_SIZE}
        color={selected ? theme.lightDarkBackground : theme.lightText}
      />
      <UserText selected={selected}>{name}</UserText>
    </UserContainer>
  );
};
export const UserContainer = styled(TouchableOpacity)`
  flex: 1;
  border: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) =>
    selected ? theme.validated : "transparent"};
`;
const UserText = styled.Text`
  color: ${({ selected }) =>
    selected ? theme.lightDarkBackground : theme.lightText};
`;
