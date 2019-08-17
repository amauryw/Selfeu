import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const basicLoaderComponent = () => (
  <Loader color={theme.lightDarkBackground} size={40} />
);

const basicEmptyComponent = () => <EmptyText>Empty array</EmptyText>;

/* do not reuse this component, that's painful for nothing */
export const mapComponent = (
  array,
  ArrayComponent,
  loading = false,
  EmptyComponent = basicEmptyComponent,
  LoadingComponent = basicLoaderComponent
) => {
  if (loading) {
    return <LoadingComponent />;
  }

  if (array.length <= 0) {
    return <EmptyComponent />;
  }
  return (
    <React.Fragment>
      {array.map(item => (
        <ArrayComponent key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
};

const Loader = styled(ActivityIndicator)``;

const EmptyText = styled.Text`
  font-size: 40;
  color: ${theme.lightText};
`;
