const mongoose = require('mongoose');
const db = require('./db/db.js');
const allRestaurantData = require('./finData.json');

const dbAddress = process.env.DB_ADDRESS || 'localhost';

mongoose.connect(`mongodb://${dbAddress}/weGotData`);

const seedDb = (data) => {
  db.count().then((counts) => {
    if (counts === 0) {
      const overviewInfo = data.map(({ result }) => (
        {
          id: result.place_id,
          name: result.name,
          tagline: result.tagline,
          type: 'Restaurant',
          vicinity: result.vicinity,
          priceLevel: result.price_level,
          zagatFood: Number(result.zagat_food),
          zagatDecor: Number(result.zagat_decor),
          zagatService: Number(result.zagat_service),
          longDescription: result.long_description,
        }
      ));
      db.insertMany(overviewInfo, () => {
        console.log('done seeding!');
        mongoose.disconnect();
      });
    } else {
      console.log('already seeded!');
      mongoose.disconnect();
    }
  });
};

seedDb(allRestaurantData);
