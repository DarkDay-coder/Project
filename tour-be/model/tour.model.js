const mongoose = require('mongoose');
const slugify = require('slugify');
const UserModel = require('./user.model');
const tourSchema = new mongoose.Schema({
   tour_name: {
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
   status: {
      type: Boolean,
      default: true,
   },
   summary: {
      type: String,
      required: true,
      trim: true, //removes all the whitespaces of beginning and ending
   },
   startDates: [Date],
   duration: {
      type: String,
      required: true,
   },
   maxGroupSize: {
      type: Number,
      required: true,
   },
   difficulty_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Difficulty',
   },

   // Depends on reviews:
   // ratingsAverage: {
   //    type: Number,
   // },
   // ratingsQuantity: {
   //    type: Number,
   //    default: 0,
   // },
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
   actualPrice: {
      type: Number,
      min: 1,
   },
   imageCover: {
      type: String,
      // required: true,
   },
   images: [String],
   startLocation_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Locations',
      default: null,
   },
   locations_id: [
      {
         type: mongoose.Types.ObjectId,
         ref: 'Locations',
         default: null,
      },
   ],
   guides_id: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
   createdBy_id: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
   },
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
