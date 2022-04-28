import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  Gradient,
  Container,
  GroupTexts,
  LoginButton,
  StatusBar,
  SubTitle,
  TextLoginButton,
  Title,
  LogoGmail,
} from './styles';

import LandingImg from '../../assets/cofre.svg';
import LogoGmailImg from '../../assets/gmail.png';

function Login() {
  GoogleSignin.configure({
    webClientId: process.env.WEB_CLIENT_ID,
  });

  async function signIn() {
    try {
      const info = await GoogleSignin.signIn();
      console.log(info.user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StatusBar />
      <Gradient>
        <Container>
          <LandingImg width={300} height={400} />

          <GroupTexts>
            <Title>
              Um jeito fácil{'\n'}de controlar as{'\n'}finanças
            </Title>
            <SubTitle>
              Uma nova forma que te ajuda a ter mais controle {'\n'}sobre a vida
              financeira.
            </SubTitle>

            <LoginButton onPress={signIn}>
              <TextLoginButton>Entrar com</TextLoginButton>
              <LogoGmail source={LogoGmailImg} />
            </LoginButton>
          </GroupTexts>
        </Container>
      </Gradient>
    </>
  );
}

export { Login };
