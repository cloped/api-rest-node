const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://mongo:27017/mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

module.exports = function () {
  const app = express();

  app.use(bodyParser.json());

  consign()
    .include('src/routes')
    .into(app);

  return app;
}
