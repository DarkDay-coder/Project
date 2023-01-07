const LocationModel = require('./../model/location.model');

class LocationController {
   getAllLocation = async (req, res, next) => {
      const location = await LocationModel.find();
      if (location.length > 0) {
         res.status(200).json({
            status: true,
            length: location.length,
            data: location,
         });
      } else {
         res.status(404).json({
            status: false,
            msg: 'no location exist on database',
         });
      }
   };
   createLocation = async (req, res, next) => {
      console.log(req.body);
      let data = {
         ...req.body,
         imageCover: req.file?.filename ? req.file.filename : '',
      };
      const newLocation = await LocationModel.create(data);
      res.status(201).json({
         status: true,
         data: newLocation,
      });
   };

   getLocationById = async (req, res, next) => {
      let location = await LocationModel.findById(req.params.id);
      if (!location) {
         res.status(404).json({
            status: false,
            msg: 'location not found',
         });
      } else {
         res.status(200).json({
            status: true,
            data: location,
         });
      }
   };

   updateLocationById = async (req, res, next) => {
      console.log(req.file);
      console.log(req.body);
      const location = await LocationModel.findById(req.params.id);
      if (!location) {
         res.status(404).json({
            status: false,
            msg: 'location does not exist',
         });
      }
      let data = {
         ...req.body,
         imageCover: req.file?.filename
            ? req.file.filename
            : location.imageCover,
      };
      const docs = await LocationModel.findByIdAndUpdate(req.params.id, data, {
         new: true,
         runValidators: true,
      });
      if (docs) {
         res.status(200).json({
            status: true,
            data: docs,
         });
      }
   };

   deleteLocationById = async (req, res, next) => {
      const location = await LocationModel.findByIdAndDelete(req.params.id);
      if (!location)
         res.status(404).json({
            status: false,
            msg: 'no data found with given ID',
         });
      else
         res.status(204).json({
            status: true,
            msg: 'data deleted successfully..!!',
         });
   };
}
module.exports = LocationController;
