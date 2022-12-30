const catchAsync = require('../middleware/catchAsync');
const userModel = require('./../model/user.model');
const jwt = require('jsonwebtoken');
const apiError = require('../middleware/apiError.middleware');
const Error = new apiError();

class authMiddleware {
   authorization = catchAsync(async (req, res, next) => {
      // 1) Getting token and check if it exist or not
      let token = '';
      if (
         req.headers.authorization &&
         req.headers.authorization.startsWith('Bearer')
      ) {
         token = req.headers.authorization.split(' ')[1];
      }
      if (!token) {
         res.status(401).json({
            status: 'fail',
            msg: 'you are not logged in..!!',
         });
      }

      // 2) Verification of token
      let verification = jwt.verify(token, process.env.JWT_SECRET);

      // 3) Check if user still exist or not
      const isUser = await userModel.findById(verification.id);
      if (!isUser) {
         return res.status(404).json({
            status: 'fail',
            msg: 'The user doesnot exist anymore',
         });
      }

      // 4) Check if user changed password after JWT was issued
      // if (!(isUser.createdAt === isUser.updatedAt)) {
      //    // if(token.iat)
      // }

      req.user = isUser;
      next();
   });

   routeRestriction = (...roles) => {
      return (req, res, next) => {
         // roles ['admin', 'lead-guide']. role='user'
         const bool = roles.includes(req.user.role);
         if (!bool) {
            return next(
               Error('You do not have permission to perform this action', 403)
            );
         }
         next();
      };
   };
}

module.exports = authMiddleware;
