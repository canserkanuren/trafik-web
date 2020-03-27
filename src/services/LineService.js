import Axios from 'axios';
import { getBaseUrl } from '../config/constants';

const getAllLines = () => {
  return Axios.get(`${getBaseUrl()}/lines`);
};

export { getAllLines };
