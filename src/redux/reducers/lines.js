import { INIT_LINES, SELECTED_LINE } from '../actions/lines';

const initialState = {
  lines: [],
  selectedLine: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_LINES:
      return {
        ...state,
        lines: action.payload
      };
    case SELECTED_LINE:
      return {
        ...state,
        selectedLine: action.payload
      };
    default:
      return state;
  }
};
