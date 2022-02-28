import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  background-color: white;
  padding: 16px;
  margin: 0 16px;
  border-radius: 32px;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: -70px;
  z-index: 10;
`;

export const SearchIcon = styled(FeatherIcon).attrs({
  name: 'search',
  size: 22,
  color: theme.colors.text_light,
})``;

export const Input = styled.TextInput.attrs({
  placeholder: 'Pesquisar',
  placeholderTextColor: theme.colors.text_light,
  autoCapitalize: 'none',
  autoCorrect: false,
  selectionColor: theme.colors.primary_dark,
})`
  font-size: 18px;
  color: ${theme.colors.text};
  margin-left: 8px;
  flex: 1;
  padding: 0;
`;
