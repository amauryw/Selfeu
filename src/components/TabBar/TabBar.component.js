import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import posed from "react-native-pose";
import styled from "styled-components";
import theme from "../../theme";
import { MyDevice } from "../../module/device";

const TAB_BAR_HEIGHT = 52;

const tabWidth = MyDevice.windowWidth / 3;

const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 }
});

const Scaler = posed.View({
  active: { scale: 1.5 },
  inactive: { scale: 1 }
});

const S = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: TAB_BAR_HEIGHT,
    elevation: 4
  },
  spotLight: {
    width: tabWidth,
    height: "100%",
    backgroundColor: theme.main,
    opacity: 0.8,
    borderRadius: 50
  }
});

export const TabBar = props => {
  const {
    renderIcon,
    labelStyle,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    navigation,
    style
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={{ ...style, ...S.container }}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`} />
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TabContainer
            key={routeIndex}
            onPress={() => {
              onTabPress({ route });
            }}
          >
            <Scaler
              style={S.scaler}
              pose={isRouteActive ? "active" : "inactive"}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </Scaler>
            <Text
              style={{
                ...labelStyle,
                color: tintColor
              }}
            >
              {getLabelText({ route })}
            </Text>
          </TabContainer>
        );
      })}
    </View>
  );
};

const TabContainer = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
