const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');


module.exports = function () {
  const app = express();

  app.use(bodyParser.json());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  consign({ cwd: path.join(__dirname) })
    .include('routes')
    .into(app);

  return app;
}
