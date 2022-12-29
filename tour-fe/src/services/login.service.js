import axiosInstance from '../config/http-request.config';

class AuthService {
   login = (data) => {
      try {
         let response = axiosInstance.post('/login', data);
         console.log(
            '🚀 ~ file: login.service.js:8 ~ AuthService ~ response',
            response
         );
      } catch (error) {
         console.log(
            '🚀 ~ file: login.service.js:8 ~ AuthService ~ error',
            error
         );
      }
   };
}

export default AuthService;
