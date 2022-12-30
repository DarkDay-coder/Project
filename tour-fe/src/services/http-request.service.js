const { default: axiosInstance } = require('../config/http-request.config');

class HttpService {
   headers;
   getHeaders = (is_strict, multipart) => {
      this.headers = {};
      let content = {
         'content-type': 'application/json',
      };
      if (is_strict) {
         content = {
            ...content,
            authorization: 'Bearer ' + localStorage.getItem('token_tour'),
         };
      }
      if (multipart) {
         content = {
            ...content,
            'content-type': 'multipart/form-data',
         };
      }
      this.headers = {
         headers: content,
      };
   };
   postRequest = async (url, data, is_strict = true, multipart = false) => {
      try {
         this.getHeaders(is_strict, multipart);
         let response = await axiosInstance.post(url, data, this.headers);
         if (response) {
            return response;
         } else {
            throw response;
         }
      } catch (error) {
         throw error;
      }
   };

   getRequest = async (url, is_strict = true) => {
      try {
         this.getHeaders(is_strict, false);
         let response = await axiosInstance.get(url, this.headers);
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
export default HttpService;
