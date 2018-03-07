const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const handler = require('./routes/requestHandler.js');

const app = express();
const indexHTMLPath = path.join(__dirname, './../client/dist/index.html');

app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, './../client/dist'))); // this is doing nothing atm

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(indexHTMLPath);
});
app.get('/api/restaurants/:id/overview', handler.requestHandler);

module.exports = app;

// "ChIJtSIPQImAhYARdWljrkbLzDM","ChIJ-WNBZ4-AhYAR9Y2WG1sRo7Q"
