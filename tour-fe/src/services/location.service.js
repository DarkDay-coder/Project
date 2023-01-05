import HttpService from './http-request.service';

class LocationService extends HttpService {
   listAllLocation = async () => {
      try {
         let response = await this.getRequest('/locations');
         console.log(response);
         return response;
      } catch (err) {
         throw err;
      }
   };
   create = async (data) => {
      try {
         let formData = new FormData();
         if (data.image) {
            formData.append('image', data.image, data.image.name);
            delete data.image;
         }
         Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
         });
         let response = await this.postRequest(
            '/locations/create',
            formData,
            true,
            true
         );
         if (response.status) {
            return response;
         } else {
            throw response;
         }
      } catch (except) {
         throw except;
      }
   };
}
export default LocationService;
