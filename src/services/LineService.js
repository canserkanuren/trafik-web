import Axios from 'axios';
import { baseUrl } from '../config/constants';

const getAllLines = () => {
  return Axios.get(`${baseUrl}/lines`);
};

export { getAllLines };
