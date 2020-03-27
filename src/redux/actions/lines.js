import { getAllLines } from '../../services/LineService';

export const INIT_LINES = 'INIT_LINES';

export const initLines = () => async (dispatch, getState) => {
  const linesInLocalStorage = getState().lines.lines;
  try {
    const { data: lines } = await getAllLines();
    dispatch({
      type: INIT_LINES,
      payload: lines
    });
  } catch (e) {
    dispatch({
      type: INIT_LINES,
      payload: linesInLocalStorage
    });
  }
};
