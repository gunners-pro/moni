import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
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
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.text};
`;

export const CardBottom = styled.View``;

export const CardValue = styled.Text`
  font-size: 26px;
  font-family: ${({theme}) => theme.fonts.text_bold};
  color: ${({theme}) => theme.colors.text};
`;

export const CardLastDate = styled.Text`
  margin-top: 12px;
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.text};
`;
