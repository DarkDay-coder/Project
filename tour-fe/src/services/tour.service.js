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
}

export default TourService;
