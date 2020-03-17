import { INIT_LINES } from '../actions/lines';

const initialState = {
  lines: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_LINES:
      return {
        ...state,
        lines: action.payload
      };
    default:
      return state;
  }
};
