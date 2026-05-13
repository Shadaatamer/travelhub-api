const Review = require('../models/reviewModel');
const baseController = require('./baseController');
const Booking = require('../models/bookingModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.tour) req.body.tour = req.params.tourId;
  next();
};

exports.checkUserBookedTour = catchAsync(async (req, res, next) => {
  const tourId = req.body.tour || req.params.tourId;

  const booking = await Booking.findOne({
    tour: tourId,
    user: req.user.id,
  });

  if (!booking) {
    return next(
      new AppError('You can only review tours that you have booked.', 403),
    );
  }

  next();
});

exports.getReviews = baseController.getAll(Review);
exports.getReview = baseController.getOne(Review);

exports.createReview = baseController.createOne(Review);
exports.deleteReview = baseController.deleteOne(Review);
exports.updateReview = baseController.updateOne(Review);
