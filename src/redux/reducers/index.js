import { combineReducers } from 'redux';
import journey from './journey';
import language from './language';
import lines from './lines';
import stations from './stations';
import theme from './theme';
import selectedLine from './selectedLine';

export default combineReducers({
  theme,
  lines,
  stations,
  language,
  journey,
  selectedLine
});
