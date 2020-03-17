import Axios from 'axios';
import { baseUrl } from '../config/constants';

const getStationsPerLine = id => {
  return Axios.get(`${baseUrl}/lines/${id}/stations`);
};

export { getStationsPerLine };
