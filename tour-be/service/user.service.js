const User = require('../model/user.model');

class userService {
   data;
   mapUser = (data, files = null) => {
      this.data = data;
      this.data.image = data.image ? data.image : null;

      if (files) {
         this.data.image = files.filename;
      }
   };

   postUser = async () => {
      try {
         this.user = new User(this.data);
         await this.user.save();
         return this.user;
      } catch (error) {
         let msg = '';
         if (error?.code === 11000) {
            msg += Object.keys(error?.keyValue).join(',') + ' Should be Unique';
         } else {
            msg = error;
         }
         throw msg;
      }
   };
}
module.exports = userService;
