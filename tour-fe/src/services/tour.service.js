import HttpService from './http-request.service';

class TourService extends HttpService {
   listAllTours = async () => {
      try {
         let response = await this.getRequest('/tours');
         return response;
      } catch (error) {
         throw error;
      }
   };
   create = async (data) => {
      try {
         // FormData
         let formData = new FormData();
         if (data.imageCover) {
            formData.append(
               'imageCover',
               data.imageCover,
               data.imageCover.name
            );
            delete data.image;
         }
         if (data)
            Object.keys(data).map((key) => {
               formData.append(key, data[key]);
            });
         let response = await this.postRequest(
            '/tours/create',
            formData,
            true,
            true
         );
         if (response.status) {
            return response;
         } else {
            throw response;
         }
      } catch (error) {
         throw error;
      }
   };
}

export default TourService;
