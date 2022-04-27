import React from 'react';
import { Container, GroupTexts, SubTitle, Title } from './styles';

import LandingImg from '../../assets/cofre.svg';

function Login() {
  return (
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
      </GroupTexts>
    </Container>
  );
}

export { Login };
