import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { lightTheme, darkTheme } from './config/themes';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './config/styles';
import Sidebar from './components/sidebar';

const App = () => {
  const isDarkTheme = useSelector(state => state.theme.isDark);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {/* <Sidebar /> */}
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

// const AppContainer = styled.div`

// `;

export default App;
