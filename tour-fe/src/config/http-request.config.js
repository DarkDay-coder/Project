import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:15000/api/v1',
   timeout: 30000,
   timeoutErrorMessage: 'Server Timed out...!!!',
   headers: {
      accept: 'application/json',
   },
});

axiosInstance.interceptors.response.use(
   (response) => {
      console.log(
         '🚀 ~ file: http-request.config.js:16 ~interceptors response',
         response
      );
      return response.data;
   },
   (error) => {
      if (error.response.status === 404) {
         console.log(
            '🚀 ~ file: http-request.config.js:22 ~ error.response.status === 404',
            error
         );
         // TODO: handle here
      } else if (error.response.status === 401) {
         console.log(
            '🚀 ~ file: http-request.config.js:29 ~ error.response.status === 401',
            error
         );
         toast.error(error.response?.data?.message, { theme: 'dark' });
         // TODO: handle here
         // FIXME: unauthorized access - clear the token and redirect to login page
      } else if (error.response.status === 403) {
         console.log(
            '🚀 ~ file: http-request.config.js:38 ~ error.response.status === 403',
            error
         );
         toast.error(error.response.data.message, { theme: 'dark' });
      } else {
         console.log(
            ' 🚀 ~ file: http-request.config.js:43 axiosInstance interceptors else error: ',
            error
         );
         throw error.response?.data?.message;
      }
   }
);

export default axiosInstance;
