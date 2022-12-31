import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:3005/api',
   timeout: 30000,
   timeoutErrorMessage: 'Server Timed out...!!!',
   headers: {
      accept: 'application/json',
   },
});

axiosInstance.interceptors.response.use(
   (response) => {
      return response.data;
   },
   (error) => {
      if (error.response.status === 404) {
         toast.error(error.response?.data?.msg);
         // TODO: handle here
      } else if (error.response.status === 401) {
         console.log(
            '🚀 ~ file: http-request.config.js:29 ~ error.response.status === 401',
            error
         );
         toast.error(error.response?.data?.msg, { theme: 'dark' });
         // TODO: handle here
         // FIXME: unauthorized access - clear the token and redirect to login page
      } else if (error.response.status === 403) {
         console.log(
            '🚀 ~ file: http-request.config.js:38 ~ error.response.status === 403',
            error
         );
         toast.error(error.response.data.message, { theme: 'dark' });
      } else if (error.response.status === 409) {
         toast.error(error.response.data.msg);
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
