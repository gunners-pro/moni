import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';

import {
  CardBottom,
  CardHeader,
  CardLastDate,
  CardTitle,
  CardValue,
  Container,
} from './styles';

interface HighLightProps {
  data: {
    title: string;
    value: string;
    lastDate: string;
    type: 'income' | 'outcome' | 'total';
  };
}

const color = {
  income: theme.colors.primary,
  outcome: theme.colors.attention,
  total: theme.colors.blue,
};

const icon = {
  income: 'arrow-top-right-bold-box',
  outcome: 'arrow-bottom-left-bold-box',
  total: 'monetization-on',
};

export function HighLightTransactionCard({data}: HighLightProps) {
  return (
    <Container>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        {data.type === 'total' ? (
          <MaterialIcons
            name={icon[data.type]}
            size={32}
            color={color[data.type]}
          />
        ) : (
          <MaterialCommunityIcons
            name={icon[data.type]}
            size={32}
            color={color[data.type]}
          />
        )}
      </CardHeader>
      <CardBottom>
        <CardValue>{data.value}</CardValue>
        <CardLastDate>Última entrada {data.lastDate}</CardLastDate>
      </CardBottom>
    </Container>
  );
}
