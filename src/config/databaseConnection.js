const mongoose = require('mongoose');

function databaseConnection(callback) {
  mongoose.connect(
    'mongodb://mongo:27017/mongo',
    { useNewUrlParser: true }
  ).then(async () => {
    callback().then(() => {
      mongoose.connection.close();
    });
  });
}

module.exports = function (callback) {
  return (callback) => databaseConnection(callback);
}
