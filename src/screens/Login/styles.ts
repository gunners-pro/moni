import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.primary};
  flex: 1;
  align-items: center;
  padding: 0 24px;
`;

export const GroupTexts = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 36px;
  font-family: ${props => props.theme.fonts.title};
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.green_light};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.text};
  margin-top: 16px;
`;
