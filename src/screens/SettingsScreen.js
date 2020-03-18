import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import NavbarBack from '../components/common/navbarBack';
import LanguageToggle from '../components/languageToggle';
import ThemeToggle from '../components/themeToggle';

const SettingsScreen = ({ history }) => {
  const { t } = useTranslation();
  return (
    <SettingsScreenContainer>
      <NavbarBack title={t('titles.settings')} history={history} />
      <SettingsScreenContent>
        <ThemeToggle />
        <LanguageToggle />
      </SettingsScreenContent>
    </SettingsScreenContainer>
  );
};

SettingsScreen.propTypes = {
  history: PropTypes.object.isRequired
};

export default SettingsScreen;

const SettingsScreenContainer = styled.div`
  height: 100vh;
`;

const SettingsScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
