const mongoose = require('mongoose');
const slugify = require('slugify');
const UserModel = require('./user.model');
const tourSchema = new mongoose.Schema({
   name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
   },
   slug: String,
   description: {
      type: String,
      trim: true,
      required: true,
   },
   summary: {
      type: String,
      required: true,
      trim: true, //removes all the whitespaces of beginning and ending
   },
   startDates: [Date],
   duration: {
      type: Number,
      required: true,
   },
   maxGroupSize: {
      type: Number,
      required: true,
   },
   difficulty: {
      type: String,
      enum: ['easy', 'medium', 'difficult'],
   },
   ratingsAverage: {
      type: Number,
   },
   ratingsQuantity: {
      type: Number,
      default: 0,
   },
   // reviews: [
   //    {
   //       types: mongoose.Types.ObjectId,
   //       ref: 'Reviews',
   //    },
   // ],
   price: {
      type: Number,
      required: true,
   },
   discount: {
      type: Number,
   },
   actual_price: {
      type: Number,
      min: 1,
   },
   imageCover: {
      type: String,
      // required: true,
   },
   images: [String],
   startLocation: {
      type: mongoose.Types.ObjectId,
      ref: 'Locations',
      default: null,
   },
   locations: [
      {
         type: mongoose.Types.ObjectId,
         ref: 'Locations',
         default: null,
      },
   ],
   guides: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
});

// virtual populate
tourSchema.virtual('reviews', {
   ref: 'Review',
   foreignField: 'tour',
   localField: '_id',
});

// DOCUMENT MIDDLEWARE   runs before the .save() and .create()
tourSchema.pre('save', function (next) {
   this.slug = slugify(this.name, { lower: true });
   next();
});

// QUERY MIDDLEWARE
// AGGREGATION MIDDLEWARE

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
