const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weGotData');

const restaurantSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
  tagline: String,
  type: String,
  vicinity: String,
  priceLevel: Number,
  zagatFood: Number,
  zagatDecor: Number,
  zagatService: Number,
  longDescription: String,
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

const findAll = (callback) => {
  RestaurantModel.find({}, callback);
};

// const findTopTenByZagatFood = (callback) => {
//   RestaurantModel.find({}, callback).limit(10).sort({zagat_food: -1});
// }

const findOneById = (id, callback) => {
  RestaurantModel.find({ id }, callback);
};

const insertMany = (restaurant, callback) => {
  RestaurantModel.insertMany(restaurant, callback);
};

exports.findOneById = findOneById;
exports.findAll = findAll;
exports.insertMany = insertMany;
