const router = require('express').Router();
const UserController = require('./../controller/user.controller');
const user_ctrl = new UserController();
const authMiddleware = require('./../middleware/auth.middleware');
const auth_midddleware = new authMiddleware();
const fileUploader = require('./../middleware/fileuploader.middleware');

router
   .get('/', user_ctrl.getAllUsers)
   .get(
      '/me',
      auth_midddleware.authorization,
      user_ctrl.findMe,
      user_ctrl.getUserById
   )
   .post('/register', fileUploader.single('image'), user_ctrl.register)
   .post('/login', user_ctrl.login)
   .post(
      '/create',
      auth_midddleware.authorization,
      fileUploader.single('image'),
      user_ctrl.createUser
   );
router
   .route('/:id')
   .get(user_ctrl.getUserById)
   .delete(user_ctrl.deleteUserById)
   .patch(user_ctrl.updateUserById);

module.exports = router;

// // router
// //    .post('/forgetPassword', auth_ctrl.forgetPassword)
// //    .patch('/resetPassword/:token', auth_ctrl.resetPassword);

// // router
// //    // protect all routes after this middleware
// //    .use(auth_midddleware.authorization)
// //    .patch('/updateMyPassword', auth_ctrl.updatePassword)
// //    .patch('/updateUser', user_ctrl.updateUser)
// //    .delete('/deleteUser', user_ctrl.deleteUser)

// // // restrict to admin only
// // router.use(auth_midddleware.routeRestriction('admin'));
// // router.route('/').get(user_ctrl.getAllUsers).post(user_ctrl.createUser);

// // router
// //    .route('/:id')
// //    .get(user_ctrl.getUserById)
// //    .patch(user_ctrl.updateUserById)
// //    .delete(user_ctrl.deleteUserById);
