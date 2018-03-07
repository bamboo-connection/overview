const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handler = require('./routes/requestHandler.js');

const app = express();
const pathname = path.join(`${__dirname}./../client/dist`);

app.use(morgan('dev'));
app.use(express.static(pathname));
app.get('/restaurants/:id', handler.requestHandler);

module.exports = app;
