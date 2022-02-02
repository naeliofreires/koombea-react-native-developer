import axios from 'axios';

import Config from '~/config';

export const api = axios.create({
  baseURL: Config.BASE_URL,
  timeout: Config.TIMEOUT,
});
