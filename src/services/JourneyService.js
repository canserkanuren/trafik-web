import Axios from 'axios';
import { getBaseUrl } from '../config/constants';

const getJourneyFromApi = (fromStation, toStation, departureTime) => {
  return Axios.get(`${getBaseUrl()}/journeys`, {
    params: {
      fromStation,
      toStation,
      departureTime
    }
  });
};

export { getJourneyFromApi };
