import React, {useEffect, useState} from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
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
import {api} from '../../services/api';
import {ItemTransaction} from '../../components/ItemTransaction';
import {SearchBarHome} from '../../components/SearchBarHome';

const {height, width} = Dimensions.get('window');
const {fiveDaysAgo, numberOfTheDayOfTheWeek} = getLastFiveDays(new Date());

const chartConfig = {
  backgroundGradientFrom: '#eff8f3',
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: '#dee7e2',
  backgroundGradientToOpacity: 0.8,
  color: () => '#5BA367',
  useShadowColorFromDataset: true,
};

interface TransactionsProps {
  id: string;
  name: string;
  category: string;
  type: 'outcome' | 'income';
  value: number;
  created_at: string;
}

export function Home() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [transactionsChart, setTransactionsChart] = useState<number[]>([]);
  const isBottomSheetOpen = useSharedValue(false);
  const heightBottom = useSharedValue(height / 3);
  const heightListCards = useSharedValue(0);
  const heightGraph = useSharedValue(0);
  const onHandlerStateChange = ({
    nativeEvent,
  }: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = nativeEvent;

      if (translationY <= -5) {
        heightBottom.value = height * 0.8;
        heightListCards.value = withTiming(-height / 2);
        heightGraph.value = withTiming(-height / 2);
      }
      if (translationY >= 5) {
        heightBottom.value = height / 3;
        heightListCards.value = withTiming(0);
        heightGraph.value = withTiming(0);
      }
    }
  };
  const onGestureHandler = useAnimatedGestureHandler({
    onActive: ({translationY}) => {
      if (!isBottomSheetOpen.value && translationY > 0) {
        return;
      } else if (isBottomSheetOpen.value && translationY < 0) {
        return;
      } else if (!isBottomSheetOpen.value && translationY < -5) {
        isBottomSheetOpen.value = true;
      } else if (isBottomSheetOpen.value && translationY > 5) {
        isBottomSheetOpen.value = false;
      }
    },
  });

  const heightBottomStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(heightBottom.value, {damping: 10}),
    };
  });

  const heightListCardsStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: heightListCards.value}],
    };
  });

  const heightGraphStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: heightGraph.value}],
    };
  });

  useEffect(() => {
    let data = [];
    for (var i = 0; i < numberOfTheDayOfTheWeek.length; i++) {
      const transactionItem = transactions.filter(
        transaction =>
          transaction.type === 'outcome' &&
          new Date(transaction.created_at).getDay() ===
            numberOfTheDayOfTheWeek[i],
      );
      data.push(transactionItem[0]);
    }
    const newData = data.map(item => (item === undefined ? 0 : item.value));
    setTransactionsChart(newData.reverse());
  }, [transactions]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/transactions');
      setTransactions(response.data);
    })();
  }, []);

  const graphs = {
    labels: fiveDaysAgo,
    datasets: [
      {
        data: transactionsChart,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
    legend: ['Gastos'],
  };

  return (
    <Container>
      <Header style={heightGraphStyle}>
        {transactionsChart.length > 0 && (
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
        )}
      </Header>
      <ListCards style={heightListCardsStyle}>
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
      <KeyboardAvoidingView behavior="height" style={{paddingTop: 20}}>
        <BottomSheetList style={[heightBottomStyle]}>
          <SearchBarHome isBottomSheetOpen={isBottomSheetOpen} />
          <ContainerToggleButtonBottomSheetList>
            <PanGestureHandler
              onGestureEvent={onGestureHandler}
              onHandlerStateChange={onHandlerStateChange}>
              <ToggleButtonBottomSheetList />
            </PanGestureHandler>
          </ContainerToggleButtonBottomSheetList>
          <ContentBottomSheet>
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
            <ItemTransaction />
          </ContentBottomSheet>
        </BottomSheetList>
      </KeyboardAvoidingView>
    </Container>
  );
}
