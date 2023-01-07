const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const auth_middleware = new authMiddleware();
const LocationController = require('./../controller/location.controller');
const loc_ctrl = new LocationController();
const fileUploader = require('./../middleware/fileuploader.middleware');

// CRUD operation
router
   .get('/', loc_ctrl.getAllLocation)
   .post(
      '/create',
      auth_middleware.authorization,
      fileUploader.single('imageCover'),
      // auth_middleware.restrictTo('lead-guide', 'admin'),
      loc_ctrl.createLocation
   )
   .get('/:id', loc_ctrl.getLocationById)
   .patch(
      '/:id',
      fileUploader.single('imageCover'),
      loc_ctrl.updateLocationById
   )
   .delete('/:id', loc_ctrl.deleteLocationById);

module.exports = router;
