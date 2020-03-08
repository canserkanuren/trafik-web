import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { lightTheme, darkTheme } from './config/themes';
import { store } from './redux';
import { Provider } from 'react-redux';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
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
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
