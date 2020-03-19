import React from 'react';
import { useSelector } from 'react-redux';
import 'rsuite/dist/styles/rsuite-default.css';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { GlobalStyle } from './config/styles';
import { darkTheme, lightTheme } from './config/themes';
const App = () => {
  const isDarkTheme = useSelector(state => state.theme.isDark);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

// const AppContainer = styled.div`

// `;

export default App;
