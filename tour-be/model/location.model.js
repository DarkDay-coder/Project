const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema(
   {
      location_name: {
         type: String,
         required: true,
      },
      country: {
         type: String,
         required: true,
      },
      city: {
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
         type: String,
      },
   },
   {
      timestamps: true,
   }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
