import { GET_JOURNEY } from '../actions/journey';

const initialState = {
  journeys: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOURNEY:
      return {
        ...state,
        journey: action.payload
      };
    default:
      return state;
  }
};
