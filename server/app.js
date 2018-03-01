const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const handler = require('./routes/requestHandler.js');

const app = express();
const pathname = path.join(`${__dirname}./../client/dist`);

app.use('/', express.static(pathname));
app.get('/restaurants/:id', handler.requestHandler);

module.exports = app;
