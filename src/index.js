const app = require('./custom-express')();
const mongoose = require('mongoose');

app.listen(3333, function () {
  console.log('Running on port:3333');

  // Connect to MongoDB
  mongoose
    .connect(
      'mongodb://mongo:27017/mongo-payzee',
      { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
});
