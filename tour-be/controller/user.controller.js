const apiError = require('../middleware/apiError.middleware');
const catchAsync = require('../middleware/catchAsync');
const UserModel = require('./../model/user.model');
const handler = require('./../controller/handlerFactory');

class UserController {
   findMe = (req, res, next) => {
      req.params.id = req.user.id;
      next();
   };
   createUser = handler.createOne(UserModel);
   getAllUsers = handler.getAll(UserModel);
   getUserById = handler.getOne(UserModel);
   updateUserById = handler.updateOne(UserModel);
   deleteUserById = handler.deleteOne(UserModel);

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

   deleteUser = catchAsync(async (req, res, next) => {
      await UserModel.findByIdAndDelete(req.user.id);
      res.status(204).json({
         status: 'success',
         data: null,
      });
   });
}
module.exports = UserController;
