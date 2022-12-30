const catchAsync = require('../middleware/catchAsync');
const userModel = require('./../model/user.model');
const apiError = require('../middleware/apiError.middleware');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwtToken = require('./../middleware/JWT.middleware');
const token = new jwtToken();

class authController {
   signup = catchAsync(async (req, res, next) => {
      const isExist = await userModel.findOne({ email: req.body.email });
      if (!isExist) {
         if (!(req.body.password === req.body.confirmPassword)) {
            res.status(203).json({
               status: 'fail',
               msg: "password and confirmPassword doesn't match",
            });
         } else {
            const newUser = await userModel.create({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               confirmPassword: req.body.confirmPassword,
               // role: req.body.role,
            });
            token.createAndSendSignToken(newUser, 201, res);
         }
      } else {
         return next(
            res.status(409).json({
               status: 'fail',
               msg: 'user with this email already exist',
            })
            // new apiError('User with this email is already exist', 409)
         );
      }
   });

   login = catchAsync(async (req, res, next) => {
      let body = req.body;

      // 1) check whether email and password exist
      if (!body.email || !body.password) {
         res.status(400).json({
            status: 'fail',
            msg: 'Please provide email and Password',
         });
      }

      // 2) check if email and password match or not
      const user = await userModel
         .findOne({ email: body.email })
         .select('+password');
      if (!user) {
         res.status(401).json({
            status: 'fail',
            msg: 'Incorrect email or password',
         });
      }
      const pass = await bcrypt.compare(req.body.password, user.password);
      if (!user || !pass) {
         res.status(401).json({
            status: 'fail',
            msg: 'Incorrect email or password',
         });
      }

      // 3) if data match with the data on db send JWT in response
      token.createAndSendSignToken(user, 200, res);
   });

   forgetPassword = catchAsync(async (req, res, next) => {
      // 1) Get user based on posted email address
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
         return next(new apiError('user does not exist', 404));
      }

      // 2) Generate random reset token

      // 3) Send the token back to the user's email address
   });

   resetPassword = catchAsync(async (req, res, next) => {
      // 1) Get user based on the token
      // 2) Check whether the token is expired or not and the user exist or not
      // 3) log the user in and send new JWT
   });

   updatePassword = catchAsync(async (req, res, next) => {
      // 1) Get user details from collection
      const user = await userModel.findById(req.user.id).select('+password');

      // 2) check current password is correct or not
      const pass = await bcrypt
         .compare
         // req.body.currentPassword,
         // user.password
         ();
      if (!pass) {
         return next(new apiError('Your current password is wrong', 401));
      }

      // 3) update password
      // user.password = req.body.password;
      // user.confirmPassword = req.body.confirmPassword;
      // await user.save();

      // 4) logged user in and send JWT in response
      token.createAndSendSignToken(user, 200, res);
   });
}

module.exports = authController;
