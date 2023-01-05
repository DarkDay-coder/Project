const userModel = require('./../model/user.model');
const jwt = require('jsonwebtoken');

class authMiddleware {
   authorization = async (req, res, next) => {
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
            status: false,
            msg: 'you are not logged in..!!',
         });
      }

      // 2) Verification of token
      let verification = jwt.verify(token, process.env.JWT_SECRET);

      // 3) Check if user still exist or not
      const isUser = await userModel.findById(verification.id);
      if (!isUser) {
         return res.status(404).json({
            status: false,
            msg: 'The user doesnot exist anymore',
         });
      }
      req.user = isUser;
      next();
   };

   //    routeRestriction = (...roles) => {
   //       return (req, res, next) => {
   //          // roles ['admin', 'lead-guide']. role='user'
   //          const bool = roles.includes(req.user.role);
   //          if (!bool) {
   //             return next(
   //                Error('You do not have permission to perform this action', 403)
   //             );
   //          }
   //          next();
   //       };
   //    };
}

module.exports = authMiddleware;
