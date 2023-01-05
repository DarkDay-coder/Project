const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
      },
      email: {
         type: String,
         unique: true,
         lowercase: true,
      },
      image: {
         type: String,
      },
      role: {
         type: String,
         enum: ['user', 'guide', 'lead-guide', 'admin'],
         default: 'user',
      },
      password: {
         type: String,
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
   this.password = await bcrypt.hash(this.password, 12);

   next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
