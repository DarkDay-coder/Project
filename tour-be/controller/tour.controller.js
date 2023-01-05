const TourModel = require('./../model/tour.model');

class TourController {
   getAllTours = async (req, res, next) => {
      const tours = await TourModel.find();
      res.status(200).json({
         status: true,
         length: tours.length,
         data: tours,
      });
   };
   createTour = async (req, res, next) => {
      let data = { ...req.body, imageCover: req.file ? req.file.filename : '' };
      const newTour = await TourModel.create(data);
      if (newTour) {
         res.status(201).json({
            status: true,
            data: newTour,
         });
      } else {
         res.status(203).json({
            status: false,
            msg: 'there was a problem',
         });
      }
   };

   //getTourById = handler.getOne(TourModel, { path: 'reviews' });
   //    createTour = handler.createOne(TourModel);
   //    updateTourById = handler.updateOne(TourModel);
   //    deleteTourById = handler.deleteOne(TourModel);
}

module.exports = TourController;
//    // createTour = catchAsync(async (req, res, next) => {
//    //    const newTour = await TourModel.create(req.body);
//    //    res.status(201).json({
//    //       status: 'success',
//    //       data: newTour,
//    //    });
//    // });

//    // updateTourById = catchAsync(async (req, res, next) => {
//    //    console.log('the update request is for id: ' + req.params.id);
//    //    const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
//    //       // upsert: true,
//    //       new: true,
//    //       runValidators: true,
//    //    });
//    //    if (!tour) {
//    //       return next(new apiError('No tour found with that ID', 404));
//    //    }
//    //    res.status(200).json({
//    //       status: 'success',
//    //       data: tour,
//    //    });
//    // });

//    // deleteTourById = catchAsync(async (req, res, next) => {
//    //    console.log('the delete request is for id: ' + req.params.id);
//    //    const tour = await TourModel.findByIdAndDelete(req.params.id);
//    //    if (!tour) {
//    //       return next(new apiError('No tour found with that ID', 404));
//    //    }
//    //    res.status(204).json({
//    //       status: 'success',
//    //       data: null,
//    //    });
//    // });

//    // getTourById = catchAsync(async (req, res, next) => {
//    //    console.log('requested data is having id: ' + req.params.id);
//    //    const tour = await TourModel.findById(req.params.id).populate('reviews'); // TourModel.findOne({_id : req.params.id})
//    //    console.log('here');
//    //    if (!tour) {
//    //       return next(new apiError('No tour found with that ID', 404));
//    //    }
//    //    console.log('next here');
//    //    res.status(200).json({
//    //       status: 'succeed!',
//    //       data: tour,
//    //    });
//    // });

//    // getAllTours = catchAsync(async (req, res, next) => {
//    //    console.log('Hello from getAllTours()');
//    //    const features = new APIFeatures(TourModel.find(), req.query)
//    //       .filter()
//    //       .sort()
//    //       .limitFields()
//    //       .pagination();
//    //    const tours = await features.query;
//    //    res.status(200).json({
//    //       status: 'succeed!',
//    //       result: tours.length,
//    //       data: tours,
//    //    });
//    // });

//    // AGGREGATION PIPELINE

//    getTourStats = catchAsync(async (req, res, next) => {
//       const stats = await TourModel.aggregate([
//          {
//             $match: { ratingsAverage: { $gte: 4.5 } },
//          },
//          {
//             $group: {
//                // _id: '$difficulty',
//                _id: { $toUpper: '$difficulty' },
//                numOfTours: { $sum: 1 },
//                numRatings: { $sum: '$ratingsQuantity' },
//                avgRating: { $avg: '$ratingsAverage' },
//                avgPrice: { $avg: '$price' },
//                minPrice: { $min: '$price' },
//                maxPrice: { $max: '$price' },
//             },
//          },
//          {
//             $sort: {
//                avgPrice: 1,
//             },
//          },
//       ]);
//       res.status(200).json({
//          status: 'success',
//          data: stats,
//       });
//    });

//    getMonthlyPlan = catchAsync(async (req, res, next) => {
//       const year = req.params.year * 1;
//       const plan = await TourModel.aggregate([
//          {
//             $unwind: '$startDates',
//          },
//          {
//             $match: {
//                startDates: {
//                   $gte: new Date(`${year}-01-01`),
//                   $lte: new Date(`${year}-12-31`),
//                },
//             },
//          },
//          {
//             $group: {
//                _id: { $month: '$startDates' },
//                numTourStarts: { $sum: 1 },
//                tours: { $push: '$name' },
//             },
//          },
//          {
//             $addFields: {
//                month: '$_id',
//             },
//          },
//          {
//             $project: {
//                _id: 0,
//             },
//          },
//          {
//             $sort: {
//                numTourStarts: 1,
//             },
//          },
//          // {
//          //    $limit: 6,
//          // },
//       ]);

//       res.status(200).json({
//          status: 'success',
//          totalTours: plan.length,
//          data: plan,
//       });
//    });
// }
// module.exports = TourController;
