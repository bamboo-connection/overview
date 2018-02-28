const request = require('supertest');
const app = require('./../server/app');

describe('Test the root path with GET', () =>
  test('it should respond to the GET request', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200))));
