import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './privateRoute';
import JourneyScreen from '../screens/JourneyScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={JourneyScreen}></Route>
        <Route exact path='/settings' component={SettingsScreen}></Route>
        {/* <PrivateRoute
          exact
          path='/characters'
          component={CharactersScreen}
        ></PrivateRoute> */}
      </Switch>
    </Router>
  );
};

export default Routes;
