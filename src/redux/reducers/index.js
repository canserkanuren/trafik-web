import { combineReducers } from 'redux';
import language from './language';
import lines from './lines';
import stations from './stations';
import theme from './theme';

export default combineReducers({
  theme,
  lines,
  stations,
  language
});
