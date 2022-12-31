const apiError = require('../middleware/apiError.middleware');
const catchAsync = require('../middleware/catchAsync');
const UserModel = require('./../model/user.model');
const handler = require('./../controller/handlerFactory');
const userService = require('./../service/user.service');
const user_svc = new userService();
class UserController {
   // constructor() {
   //    this.user_svc = new userService();
   // }
   findMe = (req, res, next) => {
      req.params.id = req.user.id;
      next();
   };

   getAllUsers = catchAsync(async (req, res, next) => {
      const users = await UserModel.find().select('-password');
      if (users) {
         res.status(200).json({
            status: 'success',
            length: users.length,
            data: users,
         });
      } else {
         res.status(404).json({
            status: 'fail',
            msg: 'no user exist on database',
         });
      }
   });

   getUserById = catchAsync(async (req, res, next) => {
      let self = await UserModel.findById(req.params.id);
      if (!self) {
         res.status(404).json({
            status: 'fail',
            msg: 'user not found',
         });
      } else {
         res.status(200).json({
            status: 'succeed!',
            data: self,
         });
      }
   });

   createUser = catchAsync(async (req, res, next) => {
      const isExist = await UserModel.findOne({ email: req.body.email });
      if (!isExist) {
         const newUser = await UserModel.create(req.body);
         res.status(201).json({
            status: 'success',
            data: newUser,
         });
      } else {
         res.status(203).json({
            status: 'fail',
            msg: 'user already exist',
         });
      }
   });

   deleteUserById = catchAsync(async (req, res, next) => {
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
   });

   updateUserById = handler.updateOne(UserModel);

   updateUser = catchAsync(async (req, res, next) => {
      // 1) create error if user posts password
      if (req.body.password || req.body.confirmPassword) {
         return next(
            new apiError(
               'You are not allowed to change password from this route',
               400
            )
         );
      }

      // 2) Filtered out unwanted fields
      const filteredBody = filterObj(req.body, 'name', 'email');

      // 3) update user document
      const updatedUser = await UserModel.findByIdAndUpdate(
         req.user.id,
         filteredBody,
         {
            new: true,
            runValidators: true,
         }
      );
      res.status(200).json({
         status: 'success',
         data: updatedUser,
      });
   });

   // deleteUser = catchAsync(async (req, res, next) => {
   //    await UserModel.findByIdAndDelete(req.user.id);
   //    res.status(204).json({
   //       status: 'success',
   //       data: null,
   //    });
   // });
}
module.exports = UserController;
