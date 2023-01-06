const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
   {
      location_name: {
         type: String,
         required: true,
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
      createdBy_id: {
         type: mongoose.Types.ObjectId,
         ref: 'User',
      },
   },
   {
      timestamps: true,
   }
);

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
