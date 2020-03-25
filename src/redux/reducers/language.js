import { SET_LANGUAGE } from '../actions/language';

const initialState = {
  language: '',
  defaultLanguages: [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};
