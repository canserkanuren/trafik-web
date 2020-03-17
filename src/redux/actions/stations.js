import { getStationsPerLine } from '../../services/StationService';

export const GET_STATIONS_PER_LINE = 'GET_STATIONS_PER_LINE';

export const getStationsForLine = ({ id }) => async (dispatch, getState) => {
  const { stations } = getState().stations;

  try {
    const { data: stationsPerLine } = await getStationsPerLine(id);

    stations[id] = stationsPerLine;
    console.log(stationsPerLine);
    dispatch({
      type: GET_STATIONS_PER_LINE,
      payload: stations
    });
  } catch (e) {
    dispatch({
      type: GET_STATIONS_PER_LINE,
      payload: stations
    });
  }
};
