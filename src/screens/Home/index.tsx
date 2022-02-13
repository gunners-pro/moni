import React from 'react';
import {Dimensions, Text} from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Container,
  Header,
  Cards,
  BottomSheetList,
  ContainerToggleButtonBottomSheetList,
  ToggleButtonBottomSheetList,
  ContentBottomSheet,
} from './styles';

const {height} = Dimensions.get('window');

export function Home() {
  const heightBottom = useSharedValue(height / 3);

  const onHandlerStateChange = ({
    nativeEvent,
  }: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = nativeEvent;

      if (translationY <= -10) {
        heightBottom.value = withSpring(height * 0.8, {damping: 10});
      }
      if (translationY >= 10) {
        heightBottom.value = withSpring(height / 3, {damping: 10});
      }
    }
  };

  const heightBottomStyle = useAnimatedStyle(() => {
    return {
      height: heightBottom.value,
    };
  });

  return (
    <Container>
      <Header>
        <Text>Header</Text>
      </Header>
      <Cards>
        <Text>List Portfolio</Text>
      </Cards>
      <BottomSheetList style={heightBottomStyle}>
        <ContainerToggleButtonBottomSheetList>
          <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
            <ToggleButtonBottomSheetList />
          </PanGestureHandler>
        </ContainerToggleButtonBottomSheetList>
        <ContentBottomSheet>
          <Text>My Stocks</Text>
        </ContentBottomSheet>
      </BottomSheetList>
    </Container>
  );
}
