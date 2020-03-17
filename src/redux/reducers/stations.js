import { GET_STATIONS_PER_LINE } from '../actions/stations';

const initialState = {
  stations: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATIONS_PER_LINE:
      return {
        ...state,
        stations: action.payload
      };
    default:
      return state;
  }
};
