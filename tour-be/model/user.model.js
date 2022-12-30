const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'Name is required'], // data validator
         trim: true,
      },
      email: {
         type: String,
         required: [true, 'you must provide your email address'], // data validator
         unique: true,
         lowercase: true,
      },
      photo: {
         type: String,
      },
      role: {
         type: String,
         enum: ['user', 'guide', 'lead-guide', 'admin'],
         default: 'user',
      },
      password: {
         type: String,
         required: [true, 'Please provide password'],
         select: false,
      },

      active: {
         type: Boolean,
         default: true,
      },
   },
   {
      timestamps: true,
   }
);

userSchema.pre('save', async function (next) {
   // Only run if statement if the password is modified
   // if (!this.isModified('password')) return next();

   // hash the password using bcryptjs
   this.password = await bcrypt.hash(this.password, 12);

   // after password validation clear the confirmpassword field
   // this.confirmPassword = undefined;
   next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
