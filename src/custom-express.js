const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = function () {
  const app = express();

  app.use(bodyParser.json());

  consign({ cwd: path.join(__dirname) })
    .include('routes')
    .into(app);

  return app;
}
