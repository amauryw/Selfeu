import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import theme from "../../../../theme";
import posed from "react-native-pose";

const TOGGLE_ICON_SIZE = 20;

const Scaler = posed.View({
  selected: { scale: 1.8 },
  not_selected: { scale: 1 }
});

export const Toggle = props => {
  return (
    <ToggleContainer>
      {props.userSelection.map(user => (
        <ToggleUnit key={user.id} onPress={() => props.onToggle(user.id)}>
          <Scaler pose={user.selected ? "selected" : "not_selected"}>
            <CircleContainer>
              <Icon
                name="face"
                size={TOGGLE_ICON_SIZE}
                color={user.selected ? theme.main : theme.lightText}
              />
              <UserText selected={user.selected}>{user.name}</UserText>
            </CircleContainer>
          </Scaler>
        </ToggleUnit>
      ))}
    </ToggleContainer>
  );
};

// ajouter ici un efeft de diffusion
const CircleContainer = styled.View`
  border-color: ${theme.lightText};
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
const ToggleContainer = styled.View`
  flex-direction: row;
`;

const ToggleUnit = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const UserText = styled.Text`
  color: ${({ selected }) => (selected ? theme.main : theme.lightText)};
`;
