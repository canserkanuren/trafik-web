import Axios from 'axios';
import { baseUrl } from '../config/constants';

const getJourneyFromApi = async (fromStation, toStation, departureTime) => {
  return Axios.get(`${baseUrl}/journeys`, {
    params: {
      fromStation,
      toStation,
      departureTime
    }
  });
};

export { getJourneyFromApi };
