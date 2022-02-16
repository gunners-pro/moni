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
import {LineChart} from 'react-native-chart-kit';
import {
  Container,
  Header,
  ListCards,
  BottomSheetList,
  ContainerToggleButtonBottomSheetList,
  ToggleButtonBottomSheetList,
  ContentBottomSheet,
} from './styles';
import {getLastFiveDays} from '../../utils/getLastFiveDays';
import {HighLightTransactionCard} from '../../components/HighLightTransactionCard';

const {height, width} = Dimensions.get('window');

const graphs = {
  labels: getLastFiveDays(new Date()),
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
        <HighLightTransactionCard
          data={{
            title: 'Entrada',
            value: 'R$ 1349,25',
            lastDate: '14 de Abril de 2022',
            type: 'income',
          }}
        />
        <HighLightTransactionCard
          data={{
            title: 'Saída',
            value: 'R$ 449,25',
            lastDate: '02 de Novembro de 2022',
            type: 'outcome',
          }}
        />
        <HighLightTransactionCard
          data={{
            title: 'Total',
            value: 'R$ 1849,98',
            lastDate: '26 de Setembro de 2022',
            type: 'total',
          }}
        />
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
