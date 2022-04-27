import styled from 'styled-components/native';
import { shade } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
`;

export const GroupTexts = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 44px;
  line-height: 44px;
  font-family: ${props => props.theme.fonts.title};
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.green_light};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.text};
  margin-top: 16px;
`;

export const LoginButton = styled(RectButton)`
  background-color: ${props => props.theme.colors.background};
  margin-top: 24px;
  height: 62px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 16px;
  max-width: 240px;
`;

export const TextLoginButton = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 22px;
  font-family: ${props => props.theme.fonts.text_bold};
`;

export const LogoGmail = styled.Image`
  width: 44px;
  height: 44px;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.primary,
}))``;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.primary, shade(0.3, theme.colors.primary)],
}))`
  flex: 1;
`;
