import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
const {width} = Dimensions.get('window');

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

export const Card = styled.View`
  background-color: white;
  flex: 1;
  width: ${width * 0.8}px;
  height: 200px;
  margin-right: 20px;
  justify-content: space-between;
  padding: 32px;
  border-radius: 30px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
`;

export const CardValue = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;

export const CardLastDate = styled.Text`
  margin-top: 12px;
  color: #a3aaa4bb;
`;

export const CardBottom = styled.View``;
