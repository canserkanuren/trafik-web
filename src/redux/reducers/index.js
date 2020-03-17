import { combineReducers } from 'redux';

import theme from './theme';
import lines from './lines';
import stations from './stations';

export default combineReducers({
  theme,
  lines,
  stations
});
