import { toast } from 'react-toastify';
import axiosInstance from '../config/http-request.config';

class AuthService {
   login = async (data) => {
      try {
         let response = await axiosInstance.post('/users/login', data);

         if (response) {
            localStorage.setItem('token_tour', response.token);
            localStorage.setItem(
               'user',
               JSON.stringify({
                  name: response.data.name,
                  email: response.data.email,
                  role: response.data.role,
                  active: response.data.active,
                  createdAt: response.data.createdAt,
               })
            );
            return response.data;
         } else {
            throw 'Invalid Credentials';
         }
      } catch (exception) {
         throw exception;
      }
   };
}

export default AuthService;
