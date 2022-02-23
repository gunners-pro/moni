import styled from 'styled-components/native';
import {HEIGHT_BOTTOM_BAR} from '.';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: ${HEIGHT_BOTTOM_BAR}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
