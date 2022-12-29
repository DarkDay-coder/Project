import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: process.env.API_BASE_URL,
   timeout: 30000,
   timeoutErrorMessage: 'Server Timed out...!!!',
   headers: {
      accept: 'application/json',
   },
});

axiosInstance.interceptors.response.use(
   (response) => {},
   (error) => {}
);

export default axiosInstance;
