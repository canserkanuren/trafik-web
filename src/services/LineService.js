import Axios from 'axios';
import { baseUrl } from '../config/constants';

const getAllLines = async () => {
  return Axios.get(`${baseUrl}/lines`);
};

export { getAllLines };
