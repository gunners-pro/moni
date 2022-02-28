import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {HEIGHT_BOTTOM_BAR} from '../../components/CustomBottomTabBar';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled(Animated.View)`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ListCards = styled(Animated.ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 20,
    alignItems: 'center',
  },
})`
  flex: 1;
  padding: 20px;
`;

export const BottomSheetList = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.bottomSheetList};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ContainerToggleButtonBottomSheetList = styled.View`
  width: 100%;
  align-items: center;
  padding: 8px;
`;

export const ToggleButtonBottomSheetList = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.gray};
  width: 40px;
  height: 15px;
  border-radius: 8px;
`;

export const ContentBottomSheet = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: HEIGHT_BOTTOM_BAR + 8,
  },
})`
  padding: 0 24px;
`;
