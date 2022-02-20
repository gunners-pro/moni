import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';

import {
  Container,
  SectionLeft,
  IconCategory,
  DetailsCategory,
  TitleTransaction,
  TextCategory,
  SectionRight,
  ValueTransaction,
  DateTransaction,
} from './styles';

export function ItemTransaction() {
  const theme = useTheme();

  return (
    <Container>
      <SectionLeft>
        <IconCategory>
          <MaterialIcons
            name="healing"
            size={32}
            color={theme.colors.primary}
          />
        </IconCategory>
        <DetailsCategory>
          <TitleTransaction>Amortecedor</TitleTransaction>
          <TextCategory>Carro</TextCategory>
        </DetailsCategory>
      </SectionLeft>

      <SectionRight>
        <ValueTransaction>$3,560,48</ValueTransaction>
        <DateTransaction>20/02/2022</DateTransaction>
      </SectionRight>
    </Container>
  );
}
