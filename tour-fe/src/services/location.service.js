import HttpService from './http-request.service';

class LocationService extends HttpService {
   listAllLocation = async () => {
      try {
         let response = await this.getRequest('/locations');
         return response;
      } catch (err) {
         throw err;
      }
   };
   create = async (data) => {
      try {
         let formData = new FormData();
         if (data.imageCover) {
            console.log('we are here');
            formData.append(
               'imageCover',
               data.imageCover,
               data.imageCover.name
            );
            delete data.imageCover;
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
   getLocationById = async (id) => {
      try {
         let data = await this.getRequest(`/locations/${id}`);
         return data;
      } catch (error) {
         throw error;
      }
   };
   updateLocationById = async (data, id) => {
      try {
         let formData = new FormData();
         if (data.imageCover && typeof data.imageCover === 'object') {
            formData.append(
               'imageCover',
               data.imageCover,
               data.imageCover.name
            );
            delete data.imageCover;
         }
         Object.keys(data).map((key) => {
            formData.append(key, data[key]);
         });
         let response = await this.updateRequest(
            `/locations/${id}`,
            formData,
            true,
            true
         );
         return response;
      } catch (error) {
         throw error;
      }
   };
   deleteLocationById = async (id) => {
      try {
         let del = await this.deleteRequest('/locations/' + id, true);
      } catch (error) {
         throw error;
      }
   };
}
export default LocationService;
