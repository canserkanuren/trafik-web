import { combineReducers } from 'redux';
import journey from './journey';
import language from './language';
import lines from './lines';
import stations from './stations';
import theme from './theme';

export default combineReducers({
  theme,
  lines,
  stations,
  language,
  journey
});
