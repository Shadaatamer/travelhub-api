const Review = require('../models/reviewModel');
const baseController = require('./baseController');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.tour) req.body.tour = req.params.tourId;
  next();
};
exports.getReviews = baseController.getAll(Review);
exports.getReview = baseController.getOne(Review);

exports.createReview = baseController.createOne(Review);
exports.deleteReview = baseController.deleteOne(Review);
exports.updateReview = baseController.updateOne(Review);
