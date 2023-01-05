//
import { toast } from 'react-toastify';
import HttpService from './http-request.service';
class UserService extends HttpService {
   create = async (data) => {
      try {
         // FormData
         let formData = new FormData();
         if (data.image) {
            formData.append('image', data.image, data.image.name);
            delete data.image;
         }
         Object.keys(data).map((key) => {
            formData.append(key, data[key]);
         });
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
      } catch (error) {
         throw error;
      }
   };

   getUserById = async (id) => {
      try {
         let user = await this.getRequest('/users/' + id);
         return user;
      } catch (error) {
         throw error;
      }
   };

   updateUserById = async (data, id) => {
      try {
         let formData = new FormData();
         if (data.image && typeof data.image === 'object') {
            formData.append('image', data.image, data.image.name);
            delete data.image;
         }
         Object.keys(data).map((key) => {
            formData.append(key, data[key]);
         });
         let response = await this.updateRequest(
            '/users/' + id,
            formData,
            true,
            true
         );
         if (response) {
            return response;
         } else {
            throw response;
         }
      } catch (error) {
         throw error;
      }
   };
}

export default UserService;
