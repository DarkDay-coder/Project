const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const auth_middleware = new authMiddleware();
const LocationController = require('./../controller/location.controller');
const location_ctrl = new LocationController();

// CRUD operation
router.get('/', location_ctrl.getAllLocation).post(
   '/create',
   auth_middleware.authorization,
   // auth_middleware.restrictTo('lead-guide', 'admin'),
   location_ctrl.createLocation
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
