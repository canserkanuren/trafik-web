import { getJourneyFromApi } from '../../services/JourneyService';

export const GET_JOURNEY = 'GET_JOURNEY';

export const getJourney = ({
  fromStation,
  toStation,
  departureTime
}) => async dispatch => {
  try {
    const { data: journey } = await getJourneyFromApi(
      fromStation,
      toStation,
      departureTime
    );

    dispatch({
      type: GET_JOURNEY,
      payload: journey
    });
  } catch (e) {
    dispatch({
      type: GET_JOURNEY,
      payload: {}
    });
  }
};
