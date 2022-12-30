import { toast } from 'react-toastify';
import HttpService from './http-request.service';

class AuthService extends HttpService {
   login = async (data) => {
      try {
         let response = await this.postRequest('/users/login', data, false);

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
            toast.error('Invalid credentials', { theme: 'dark' });
            throw 'Invalid Credentials';
         }
      } catch (exception) {
         throw exception;
      }
   };
}

export default AuthService;
