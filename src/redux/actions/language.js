export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = payload => async dispatch => {
  dispatch({
    type: SET_LANGUAGE,
    payload
  });
};
