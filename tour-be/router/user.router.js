const router = require('express').Router();
const UserController = require('./../controller/user.controller');
const user_ctrl = new UserController();
const AuthController = require('./../controller/auth.controller');
const auth_ctrl = new AuthController();
const authMiddleware = require('./../middleware/auth.middleware');
const auth_midddleware = new authMiddleware();
const fileUploader = require('./../middleware/fileuploader.middleware');

router
   .get('/', user_ctrl.getAllUsers)
   .post('/signup', fileUploader.single('image'), auth_ctrl.signup)
   .post('/login', auth_ctrl.login)
   .get(
      '/me',
      auth_midddleware.authorization,
      user_ctrl.findMe,
      user_ctrl.getUserById
   )
   .post(
      '/create',
      auth_midddleware.authorization,
      fileUploader.single('image'),
      user_ctrl.createUser
   )
   .get('/:id', user_ctrl.getUserById)
   .delete('/:id', user_ctrl.deleteUserById);
// router
//    .post('/signup', auth_ctrl.signup)
//    .post('/login', auth_ctrl.login)
//    .post('/forgetPassword', auth_ctrl.forgetPassword)
//    .patch('/resetPassword/:token', auth_ctrl.resetPassword);

// router
//    // protect all routes after this middleware
//    .use(auth_midddleware.authorization)
//    .patch('/updateMyPassword', auth_ctrl.updatePassword)
//    .patch('/updateUser', user_ctrl.updateUser)
//    .delete('/deleteUser', user_ctrl.deleteUser)
//    .get('/me', user_ctrl.findMe, user_ctrl.getUserById);

// // restrict to admin only
// router.use(auth_midddleware.routeRestriction('admin'));
// router.route('/').get(user_ctrl.getAllUsers).post(user_ctrl.createUser);

// router
//    .route('/:id')
//    .get(user_ctrl.getUserById)
//    .patch(user_ctrl.updateUserById)
//    .delete(user_ctrl.deleteUserById);

module.exports = router;
