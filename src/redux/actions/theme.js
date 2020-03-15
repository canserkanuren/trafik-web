export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = payload => async dispatch => {
  dispatch({
    type: CHANGE_THEME,
    payload
  });
};
