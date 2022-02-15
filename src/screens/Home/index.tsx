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
import {LineChart} from 'react-native-chart-kit';
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

const {height, width} = Dimensions.get('window');

const graphs = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
  datasets: [
    {
      data: [985, 3420, 669.4, 329, 2846],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    },
  ],
  legend: ['Gastos'],
};

const chartConfig = {
  backgroundGradientFrom: '#eff8f3',
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: '#dee7e2',
  backgroundGradientToOpacity: 0.8,
  color: () => '#5BA367',
  useShadowColorFromDataset: true,
};

export function Home() {
  const heightBottom = useSharedValue(height / 3);

  const onHandlerStateChange = ({
    nativeEvent,
  }: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = nativeEvent;

      if (translationY <= -5) {
        heightBottom.value = height * 0.8;
      }
      if (translationY >= 5) {
        heightBottom.value = height / 3;
      }
    }
  };

  const heightBottomStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(heightBottom.value, {damping: 10}),
    };
  });

  return (
    <Container>
      <Header>
        <LineChart
          data={graphs}
          height={220}
          width={width - 40}
          chartConfig={chartConfig}
          fromZero
          yAxisLabel="R$"
          style={{
            borderRadius: 16,
          }}
          yLabelsOffset={5}
        />
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
