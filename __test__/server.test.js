const request = require('supertest');
const app = require('./../server/app');
const db = require('./../db/db');
const data = require('./../data.test');

describe('Test the root path with GET', () =>
  test('it should respond to the GET request with a 200', () =>
    request(app).get('/restaurants/ChIJ0SMraI-AhYAREeJAvm2_yGM').then(response =>
      expect(response.statusCode).toBe(200))));

// When these below test is run, the coverage tool insists that
// the lines this test uses have not been tested.
// This is despite the fact that the test totally passes.
// I am unsure as to what the issue is here.

describe('Test the restaurants endpoint with POST', () =>
  test('it should respond to the POST request with a 404', () =>
    request(app).post('/restaurants/ChIJ0SMraI-AhYAREeJAvm2_yGM').then(response =>
      expect(response.statusCode).toBe(404))));

describe('Test MongoDB', () =>
  test('it should insert two records into the database, then retrieve one by ID', () => {
    const testInsertion = (testData) => {
      const processedData = testData.map(({ result }) => (
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
        }));
      db.insertMany(processedData, (err1, result1) => {
        if (err1) {
          console.log(err1);
        } else {
          console.log(result1);
          db.findOneById('ChIJ0SMraI-AhYAREeJAvm2_yGM', (err2, result2) => {
            if (err2) {
              console.log(err2);
            } else {
              expect(result2.name).toBe('Hotel Fusion');
            }
          });
        }
      });
    };
    testInsertion(data);
  }));
