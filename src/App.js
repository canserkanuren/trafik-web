import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { lightTheme, darkTheme } from './config/themes';
import { store } from './redux';
import { Provider } from 'react-redux';
import { GlobalStyle } from './config/styles';

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  useEffect(() => {
    store.subscribe(() => {
      console.log(
        'App -> store.getState().theme.currentTheme',
        store.getState()
      );
      setCurrentTheme(store.getState().theme.currentTheme);
    });
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
