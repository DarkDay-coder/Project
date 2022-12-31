//
import { toast } from 'react-toastify';
import axiosInstance from '../config/http-request.config';
import HttpService from './http-request.service';
class UserService extends HttpService {
   create = async (data) => {
      try {
         console.log(data);
         // FormData
         let formData = new FormData();
         if (data.image) {
            formData.append('image', data.image, data.image.name);
            delete data.image;
         }
         Object.keys(data).map((key) => {
            formData.append(key, data[key]);
         });
         // TODO: API call
         let response = await this.postRequest(
            '/users/create',
            formData,
            true,
            true
         );
         if (response.status) {
            toast.success('new user created !!');
            return response;
         } else {
            throw response;
         }
      } catch (error) {
         throw error;
      }
   };

   listAllUsers = async () => {
      try {
         let response = await this.getRequest('/users');
         return response;
      } catch (error) {
         throw error;
      }
   };

   deleteUserById = async (id) => {
      try {
         let del = await this.deleteRequest('/users/' + id, true);
         console.log(del.statusCode);
      } catch (error) {
         throw error;
      }
   };
}

export default UserService;
