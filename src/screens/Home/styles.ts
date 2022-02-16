import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f9f5;
`;

export const Header = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ListCards = styled.ScrollView.attrs({
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
  background-color: #f9fffb;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ContainerToggleButtonBottomSheetList = styled.View`
  width: 100%;
  align-items: center;
  padding: 8px;
`;

export const ToggleButtonBottomSheetList = styled.View`
  background-color: #e9eeea;
  width: 40px;
  height: 15px;
  border-radius: 8px;
`;

export const ContentBottomSheet = styled.View`
  padding: 16px 24px;
`;
