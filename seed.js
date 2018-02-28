const mongoose = require('mongoose');
const db = require('./db/db.js');

const allRestaurantData = require('./finData.json');

mongoose.connect('mongodb://127.0.0.1/weGotData');

const seedDb = (data) => {
  const overviewInfo = data.map(({ result }) => (
    {
      id: result.place_id,
      tagline: result.tagline,
      type: 'restaurant',
      vicinity: result.vicinity,
      priceLevel: result.price_level,
      zagatFood: Number(result.zagat_food),
      zagatDecor: Number(result.zagat_decor),
      zagatService: Number(result.zagat_service),
      longDescription: result.long_description,
    }
  ));
  db.insertMany(overviewInfo);
};

seedDb(allRestaurantData);
