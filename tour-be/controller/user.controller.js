const UserModel = require('./../model/user.model');
const jwtToken = require('./../middleware/JWT.middleware');
const token = new jwtToken();
const bcrypt = require('bcryptjs');

class UserController {
   findMe = (req, res, next) => {
      req.params.id = req.user.id;
      next();
   };

   getAllUsers = async (req, res, next) => {
      const users = await UserModel.find().select('-password');

      if (users) {
         res.status(200).json({
            status: true,
            length: users.length,
            data: users,
         });
      } else {
         res.status(404).json({
            status: false,
            msg: 'no user exist on database',
         });
      }
   };

   register = async (req, res, next) => {
      const isExist = await UserModel.findOne({ email: req.body.email });
      if (!isExist) {
         let data = { ...req.body, image: req.file ? req.file.filename : '' };
         const newUser = await UserModel.create(data);
         token.createAndSendSignToken(newUser, 201, res);
      } else {
         res.status(203).json({
            status: false,
            msg: 'user already exist',
         });
      }
   };

   login = async (req, res, next) => {
      try {
         let body = req.body;
         const user = await UserModel.findOne({ email: body.email }).select(
            '+password'
         );
         if (!user) {
            res.status(401).json({
               status: false,
               msg: 'User does not exist',
            });
         } else {
            const pass = await bcrypt.compare(req.body.password, user.password);
            if (!pass) {
               res.status(401).json({
                  status: false,
                  msg: 'Incorrect email or password',
               });
            } else {
               token.createAndSendSignToken(user, 200, res);
            }
         }
      } catch (error) {
         console.log(error);
      }
   };

   getUserById = async (req, res, next) => {
      let user = await UserModel.findById(req.params.id);
      if (!user) {
         res.status(404).json({
            status: false,
            msg: 'user not found',
         });
      } else {
         res.status(200).json({
            status: true,
            data: user,
         });
      }
   };

   createUser = async (req, res, next) => {
      const isExist = await UserModel.findOne({ email: req.body.email });
      if (!isExist) {
         let data = { ...req.body, image: req.file ? req.file.filename : '' };
         const newUser = await UserModel.create(data);
         res.status(201).json({
            status: true,
            data: newUser,
         });
      } else {
         res.status(203).json({
            status: false,
            msg: 'user already exist',
         });
      }
   };

   deleteUserById = async (req, res, next) => {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if (!user)
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

   updateUserById = async (req, res, next) => {
      console.log('the update request is for id: ' + req.params.id);
      let data = {
         ...req.body,
         image: req.file?.filename ? req.file.filename : null,
      };
      const docs = await Model.findByIdAndUpdate(req.params.id, data, {
         new: true,
         runValidators: true,
      });
      if (!docs) {
         res.status(404).json({
            status: 'fail',
            msg: 'user does not exist',
         });
      } else {
         res.status(200).json({
            status: 'success',
            data: docs,
         });
      }
   };
}
module.exports = UserController;

// //    updateUser = catchAsync(async (req, res, next) => {
// //       // 1) create error if user posts password
// //       if (req.body.password || req.body.confirmPassword) {
// //          return next(
// //             new apiError(
// //                'You are not allowed to change password from this route',
// //                400
// //             )
// //          );
// //       }

// //       // 2) Filtered out unwanted fields
// //       const filteredBody = filterObj(req.body, 'name', 'email');

// //       // 3) update user document
// //       const updatedUser = await UserModel.findByIdAndUpdate(
// //          req.user.id,
// //          filteredBody,
// //          {
// //             new: true,
// //             runValidators: true,
// //          }
// //       );
// //       res.status(200).json({
// //          status: 'success',
// //          data: updatedUser,
// //       });
// //    });

// //    // deleteUser = catchAsync(async (req, res, next) => {
// //    //    await UserModel.findByIdAndDelete(req.user.id);
// //    //    res.status(204).json({
// //    //       status: 'success',
// //    //       data: null,
// //    //    });
// //    // });
// // }
// // module.exports = UserController;
