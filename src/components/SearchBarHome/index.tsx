import React from 'react';
import {Dimensions} from 'react-native';
import {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {Container, SearchIcon, Input} from './styles';

interface PropsSearchBarHome {
  isBottomSheetOpen: SharedValue<boolean>;
}

const {width} = Dimensions.get('screen');

export function SearchBarHome({isBottomSheetOpen}: PropsSearchBarHome) {
  const oStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isBottomSheetOpen.value ? 1 : 0),
    right: withTiming(isBottomSheetOpen.value ? 0 : -width, {duration: 500}),
  }));

  return (
    <Container style={oStyle}>
      <SearchIcon />
      <Input />
    </Container>
  );
}
