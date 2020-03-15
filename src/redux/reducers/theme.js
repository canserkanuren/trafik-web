import { CHANGE_THEME } from '../actions/theme';

const initialState = {
  isDark: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isDark: action.payload
      };
    default:
      return state;
  }
};
