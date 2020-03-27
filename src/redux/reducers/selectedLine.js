import { SELECTED_LINE } from '../actions/selectedLine';

const initialState = {
  selectedLine: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LINE:
      return {
        ...state,
        selectedLine: action.payload
      };
    default:
      return state;
  }
};
