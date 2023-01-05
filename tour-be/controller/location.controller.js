const LocationModel = require('../model/location.model');

class LocationController {
   getAllLocation = async (req, res, next) => {
      const location = await LocationModel.find();
      res.status(200).json({
         status: true,
         length: location.length,
         data: location,
      });
   };
   createLocation = async (req, res, next) => {
      let data = { ...req.body, imageCover: req.file ? req.file.filename : '' };
      const newLocation = await LocationModel.create(data);
      if (newLocation) {
         res.status(201).json({
            status: true,
            data: newLocation,
         });
      } else {
         res.status(203).json({
            status: false,
            msg: 'there was a problem',
         });
      }
   };
}

module.exports = LocationController;
//
