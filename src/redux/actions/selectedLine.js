export const SELECTED_LINE = 'SELECTED_LINE';

export const selectLine = payload => async dispatch => {
  dispatch({
    type: SELECTED_LINE,
    payload
  });
};
