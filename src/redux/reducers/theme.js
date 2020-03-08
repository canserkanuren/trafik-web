import { CHANGE_THEME } from '../actions/theme';

import { lightTheme, darkTheme } from '../../config/themes';

const initialState = {
  currentTheme: darkTheme
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload
      };
    default:
      return state;
  }
};
