import { GET_TOKEN } from '../actions/notifications';

const initialState = {
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}