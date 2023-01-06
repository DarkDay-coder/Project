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
      console.log('data: ', data);
      try {
         let formData = new FormData();
         if (data.imageCover) {
            formData.append(
               'imageCover',
               data.imageCover,
               data.imageCover.name
            );
            console.log('formData: ', formData);
            delete data.imageCover;
         }
         Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
         });
         console.log('formData: ', formData);
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
