import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '../components/themeToggle';
import { withTranslation } from 'react-i18next';

const HomeScreen = ({ t }) => {
  return (
    <Container>
      <span>{t('title')}</span>
      <Card>Bonjour a toi </Card>
      <Button>Coucou</Button>
      <ThemeToggle />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.color};
`;

const Card = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${({ theme }) => theme.secondary};
`;

export default withTranslation()(HomeScreen);
