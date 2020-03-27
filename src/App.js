import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'rsuite/dist/styles/rsuite-default.css';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { GlobalStyle } from './config/styles';
import { darkTheme, lightTheme } from './config/themes';
import { useTranslation } from 'react-i18next';

const App = () => {
  useEffect(() => {
    messaging
      .requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
      })
      .catch(function (err) {
      });
    navigator.serviceWorker.addEventListener('message', message =>
    );
  }, []);
  const isDarkTheme = useSelector(state => state.theme.isDark);
  const language = useSelector(state => state.language.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle isDark={isDarkTheme} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
