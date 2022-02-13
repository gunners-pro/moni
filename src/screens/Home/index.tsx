import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  ListCards,
  BottomSheetList,
  ContainerToggleButtonBottomSheetList,
  ToggleButtonBottomSheetList,
  ContentBottomSheet,
  Card,
  CardHeader,
  CardBottom,
  CardTitle,
  CardValue,
  CardLastDate,
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
      <ListCards>
        <Card>
          <CardHeader>
            <CardTitle>Entradas</CardTitle>
            <MaterialCommunityIcons
              name="arrow-top-right-bold-box"
              size={32}
              color="#5BA367"
            />
          </CardHeader>
          <CardBottom>
            <CardValue>R$ 1349,59</CardValue>
            <CardLastDate>Última entrada 13 de Fevereiro de 2022</CardLastDate>
          </CardBottom>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saídas</CardTitle>
            <MaterialCommunityIcons
              name="arrow-bottom-left-bold-box"
              size={32}
              color="#ff1c1c"
            />
          </CardHeader>
          <CardBottom>
            <CardValue>R$ 1349,59</CardValue>
            <CardLastDate>Última entrada 13 de Fevereiro de 2022</CardLastDate>
          </CardBottom>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
            <MaterialIcons name="monetization-on" size={32} color="#2b5bfa" />
          </CardHeader>
          <CardBottom>
            <CardValue>R$ 1349,59</CardValue>
            <CardLastDate>Última entrada 13 de Fevereiro de 2022</CardLastDate>
          </CardBottom>
        </Card>
      </ListCards>
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
