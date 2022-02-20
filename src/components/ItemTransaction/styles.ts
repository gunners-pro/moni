import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  margin-bottom: 16px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
`;

export const SectionLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCategory = styled.View`
  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: 8px;
  padding: 12px;
`;

export const DetailsCategory = styled.View`
  padding: 0 16px;
`;

export const TitleTransaction = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.text_bold};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;

export const TextCategory = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.text_light};
`;

export const SectionRight = styled.View`
  align-items: flex-end;
`;

export const ValueTransaction = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.text_bold};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;

export const DateTransaction = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.primary};
`;
