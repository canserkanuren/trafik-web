import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'rsuite/dist/styles/rsuite-default.css';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { GlobalStyle } from './config/styles';
import { darkTheme, lightTheme } from './config/themes';
import { useTranslation } from 'react-i18next';
import { messaging } from './notifications';
import Actions from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    messaging
      .requestPermission()
      .then(async () => {
        const token = await messaging.getToken();
        console.log('App -> token', token);

        dispatch(Actions.notifications.setTokenSendPushNotification(token));
      })
      .catch(err => {
        console.error('Unable to get permission to notify.', err);
      });
    navigator.serviceWorker.addEventListener('message', message =>
      console.log(message)
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
