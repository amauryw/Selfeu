import React, { useMemo, useState, useRef } from "react";
import theme from "../../theme";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Card, CARD_WIDTH, CARD_HEIGHT } from "../Card";
import { TodoItem } from "./components/TodoItem";
import Animated, {
  Transitioning,
  Transition,
  Easing
} from "react-native-reanimated";
import { runTiming, bInterpolate, max } from "react-native-redash";
import { DoItButton } from "./components/DoItButton";

const {
  Value,
  useCode,
  block,
  Clock,
  cond,
  eq,
  set,
  concat,
  multiply,
  neq,
  and,
  not,
  clockRunning,
  interpolate,
  add,
  greaterOrEq
} = Animated;

const INITIAL_INDEX = -1;

const timing = (animation, clock) =>
  set(
    animation,
    runTiming(clock, 0, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear
    })
  );

export const MyTodos = ({ cards }) => {
  const container = useRef();
  const [selectedCardIndex, setSelectedCardIndex] = useState(INITIAL_INDEX);
  const {
    animation,
    cardRotations,
    cardTranslations,
    cardZIndexes,
    clock,
    isGroupingAnimationDone,
    selectedCard,
    shouldUpdateZIndex,
    translateX
  } = useMemo(
    () => ({
      animation: new Value(0),
      cardRotations: cards.map(() => new Value(0)),
      cardTranslations: cards.map(() => new Value(0)),
      cardZIndexes: cards.map(() => new Value(0)),
      clock: new Clock(),
      isGroupingAnimationDone: new Value(0),
      selectedCard: new Value(INITIAL_INDEX),
      shouldUpdateZIndex: new Value(1),
      translateX: new Value(CARD_WIDTH)
    }),
    [cards]
  );

  const selectCard = index => {
    if (index !== selectedCardIndex) {
      if (container && container.current) {
        container.current.animateNextTransition();
      }
      selectedCard.setValue(index);
      setSelectedCardIndex(index);
    }
  };

  const INITIAL_DEG = cards.length > 3 ? 20 : cards.length > 1 ? 15 : 0;
  const PREZ_DEG = cards.length > 3 ? 10 : cards.length > 1 ? 15 : 0;
  useCode(
    block([
      cond(eq(selectedCard, INITIAL_INDEX), [
        timing(animation, clock),
        ...cards.map((card, index) =>
          set(
            cardRotations[index],
            bInterpolate(animation, 0, INITIAL_DEG - PREZ_DEG * index)
          )
        )
      ]),
      cond(
        and(
          neq(selectedCard, INITIAL_INDEX),
          not(isGroupingAnimationDone),
          not(cards.length <= 1)
        ),
        [
          timing(animation, clock),
          set(translateX, bInterpolate(animation, translateX, 0)),
          ...cards.map((card, index) =>
            set(
              cardRotations[index],
              bInterpolate(
                animation,
                cardRotations[index],
                (15 / 2) * ((index % 3) - 1)
              )
            )
          ),
          cond(not(clockRunning(clock)), set(isGroupingAnimationDone, 1))
        ]
      ),
      ...cards.map((card, index) =>
        cond(and(eq(selectedCard, index), isGroupingAnimationDone), [
          timing(animation, clock),
          ...cards
            .map((_card, i) => i)
            .filter((_card, i) => selectedCard !== i)
            .map((absoluteIndex, i) =>
              set(
                cardRotations[absoluteIndex],
                bInterpolate(
                  animation,
                  cardRotations[absoluteIndex],
                  7.5 * (i % 2 === 0 ? -1 : 1)
                )
              )
            ),
          set(
            cardRotations[index],
            interpolate(animation, {
              inputRange: [0, 0.5, 1],
              outputRange: [0, 45, 0]
            })
          ),
          set(
            cardTranslations[index],
            interpolate(animation, {
              inputRange: [0, 0.5, 1],
              outputRange: [0, -CARD_HEIGHT * 1.5, 1]
            })
          ),
          cond(and(greaterOrEq(animation, 0.5), shouldUpdateZIndex), [
            set(cardZIndexes[index], add(max(...cardZIndexes), 1)),
            set(shouldUpdateZIndex, 0)
          ]),
          cond(not(clockRunning(clock)), set(shouldUpdateZIndex, 1))
        ])
      )
    ]),
    [cards]
  );
  return (
    <Container
      ref={container}
      transition={<Transition.In type="fade" durationMs={1000} />}
    >
      <AnimationContainer>
        {cards.map((card, index) => {
          const rotateZ = concat(cardRotations[index], "deg");
          const translateY = cardTranslations[index];
          const elevation = cardZIndexes[index];
          const zIndex = elevation; // ios
          return (
            <Animated.View
              key={card.id}
              style={{
                elevation,
                zIndex,
                ...StyleSheet.absoluteFillObject,
                transform: [
                  { translateX: multiply(translateX, -1) },
                  { rotateZ },
                  { translateX },
                  { translateY }
                ]
              }}
            >
              <Card key={card.id} item={card} />
            </Animated.View>
          );
        })}
      </AnimationContainer>
      <ListSelection>
        {cards.map((item, _index) => (
          <TodoItem
            key={item.id}
            item={item}
            selected={selectedCardIndex === _index}
            onPress={() => selectCard(_index)}
          />
        ))}
      </ListSelection>
      <ButtonContainer>
        <DoItButton actionId={cards[selectedCardIndex].id} />
      </ButtonContainer>
    </Container>
  );
};

// level 2
const Container = styled(Transitioning.View)`
  flex: 1;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const AnimationContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: ${theme.darkBackground};
`;
const ListSelection = styled.ScrollView`
  flex: 1;
`;
