import axios from 'axios';

import envConfig from '@/config';

const axiosInstance = axios.create({
  baseURL: envConfig.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
