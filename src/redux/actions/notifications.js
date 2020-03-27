import { push } from '../../services/Notifications';

export const GET_TOKEN = 'GET_TOKEN';
export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';

export const setTokenSendPushNotification = token => async dispatch => {
  try {
    dispatch({
      type: GET_TOKEN,
      payload: token
    });
  } catch (error) {
    dispatch({
      type: GET_TOKEN,
      payload: token
    });
  }
};

export const pushNotification = () => async (dispatch, getState) => {
  const { token } = getState().notifications;

  try {
    await push(token);
    dispatch({
      type: PUSH_NOTIFICATION
    });
  } catch (error) {
    dispatch({
      type: PUSH_NOTIFICATION
    });
  }
};
