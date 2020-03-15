import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { lightTheme, darkTheme } from './config/themes';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './config/styles';

function App() {
  const isDarkTheme = useSelector(state => state.theme.isDark);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
