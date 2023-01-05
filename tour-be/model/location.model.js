const mongoose = require('mongoose');
const UserModel = require('./user.model');

const LocationSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
      },
      country: {
         type: String,
         required: true,
      },
      status: {
         type: Boolean,
         default: true,
      },
      imageCover: {
         type: String,
      },
      createdBy: {
         type: mongoose.Types.ObjectId,
         ref: 'Users',
      },
   },
   {
      timestamps: true,
   }
);

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
