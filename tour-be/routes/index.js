const router = require('express').Router();

const user_routes = require('./user.routes');
const tour_routes = require('./tour.routes');
const location_routes = require('./location.routes');

router.use('/users', user_routes);
router.use('/tours', tour_routes);
router.use('/locations', location_routes);

module.exports = router;
