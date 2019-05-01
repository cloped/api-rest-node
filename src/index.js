const app = require('./custom-express')();

app.listen(3333, function () {
  console.log('Running on port:3333');
});
