import Axios from 'axios';
import { getBaseUrl } from '../config/constants';

const getStationsPerLine = id => {
  return Axios.get(`${getBaseUrl()}/lines/${id}/stations`);
};

export { getStationsPerLine };
