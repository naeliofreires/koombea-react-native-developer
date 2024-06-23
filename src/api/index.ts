import axios from 'axios';
import Config from '~/config';
const baseURL = Config.BASE_URL;
const timeout = Config.TIMEOUT;
export const api = axios.create({ baseURL, timeout });
