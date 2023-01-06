const router = require('express').Router();
const fileUploader = require('../middleware/fileuploader.middleware');
const TourController = require('./../controller/tour.controller');
const tour_controller = new TourController();
const authMiddleware = require('./../middleware/auth.middleware');
const auth_middleware = new authMiddleware();

// CRUD operation
router.get('/', tour_controller.getAllTours).post(
   '/create',
   auth_middleware.authorization,
   // auth_middleware.restrictTo('lead-guide', 'admin'),
   fileUploader.single('imageCover'),
   fileUploader.array('images'),
   tour_controller.createTour
);

module.exports = router;

//
// router
//    .route('/top-5-cheap')
//    .get(tour_controller.aliasTopTours, tour_controller.getAllTours);
// router.route('/tour-stats').get(tour_controller.getTourStats);
// router
//    .route('/monthly-plan/:year')
//    .get(
//       auth_middleware.authorize,
//       auth_middleware.restrictTo('admin', 'lead-guide', 'guide'),
//       tour_controller.getMonthlyPlan
//    );
// router
//    .post(
//       auth_middleware.authorize,
//       auth_middleware.restrictTo('lead-guide', 'admin'),
//       tour_controller.createTour
//    );
// router
//    .route('/:id')
//    .get(tour_controller.getTourById)
//    .patch(
//       auth_middleware.authorize,
//       auth_middleware.restrictTo('admin', 'lead-guide'),
//       tour_controller.updateTourById
//    )
//    .delete(
//       auth_middleware.authorize,
//       auth_middleware.restrictTo('admin', 'lead-guide'),
//       tour_controller.deleteTourById
//    );
// module.exports = router;
