export const SET_LANGUAGE = 'GET_STATIONS_PER_LINE';

export const setLanguage = payload => async dispatch => {
  dispatch({
    type: SET_LANGUAGE,
    payload
  });
};
