const jwt = require('jsonwebtoken');

class jwtToken {
   // JWT TOKEN GENERATION
   signToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
         expiresIn: process.env.JWT_EXPIRES_IN,
      });
   };

   createAndSendSignToken = (user, statusCode, res) => {
      const token = this.signToken(user._id);

      // HIDE PASSWORD FROM DISPLAYING
      user.password = undefined;

      res.status(statusCode).json({
         status: 'success',
         token,
         data: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            active: user.active,
            createdAt: user.createdAt,
         },
      });
   };
}

module.exports = jwtToken;
