import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import HomeScreen from '../screens/HomeScreen';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
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
