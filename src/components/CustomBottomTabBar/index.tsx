import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {useTheme} from 'styled-components/native';
import {Container, Button} from './styles';

export const HEIGHT_BOTTOM_BAR = 80;

export function CustomBottomTabBar({state, navigation}: BottomTabBarProps) {
  const {width} = Dimensions.get('screen');
  const CURVE_PATH_WIDTH = width / 2;
  const theme = useTheme();

  return (
    <Container>
      <Svg style={{position: 'absolute'}}>
        <Path
          d={`M 0 0 C ${CURVE_PATH_WIDTH} 20 ${CURVE_PATH_WIDTH} 20 ${width} 0 L ${width} ${HEIGHT_BOTTOM_BAR} L 0 ${HEIGHT_BOTTOM_BAR} Z`}
          fill={theme.colors.gray}
        />
      </Svg>
      {state.routes.map((route, index) => {
        const name = route.name === 'home' ? 'home' : 'bar-chart-2';
        const isFocused = state.index === index;
        const color = isFocused ? theme.colors.primary : theme.colors.text_dark;

        return (
          <Button key={index} onPress={() => navigation.navigate(route.name)}>
            <FeatherIcon name={name} size={30} color={color} />
          </Button>
        );
      })}
    </Container>
  );
}
