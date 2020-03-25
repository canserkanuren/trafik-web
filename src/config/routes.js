import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JourneyScreen from '../screens/JourneyScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={JourneyScreen}></Route>
        <Route exact path='/settings' component={SettingsScreen}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
