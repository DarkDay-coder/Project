// const catchAsync = require('../middleware/catchAsync');
// const UserModel = require('./../model/user.model');
// const apiError = require('../middleware/apiError.middleware');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
// const jwtToken = require('./../middleware/JWT.middleware');
// const token = new jwtToken();

// class authController {

//    forgetPassword = catchAsync(async (req, res, next) => {
//       // 1) Get user based on posted email address
//       const user = await UserModel.findOne({ email: req.body.email });
//       if (!user) {
//          return next(new apiError('user does not exist', 404));
//       }

//       // 2) Generate random reset token

//       // 3) Send the token back to the user's email address
//    });

//    resetPassword = catchAsync(async (req, res, next) => {
//       // 1) Get user based on the token
//       // 2) Check whether the token is expired or not and the user exist or not
//       // 3) log the user in and send new JWT
//    });

//    updatePassword = catchAsync(async (req, res, next) => {
//       // 1) Get user details from collection
//       const user = await UserModel.findById(req.user.id).select('+password');

//       // 2) check current password is correct or not
//       const pass = await bcrypt
//          .compare
//          // req.body.currentPassword,
//          // user.password
//          ();
//       if (!pass) {
//          return next(new apiError('Your current password is wrong', 401));
//       }

//       // 3) update password
//       // user.password = req.body.password;
//       // user.confirmPassword = req.body.confirmPassword;
//       // await user.save();

//       // 4) logged user in and send JWT in response
//       token.createAndSendSignToken(user, 200, res);
//    });
// }

// module.exports = authController;
