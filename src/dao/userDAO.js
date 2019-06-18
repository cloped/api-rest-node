const User = require('../models/user');

module.exports = {
  readUser: function (userId) {
    return User.findById(userId);
  },

  updateUser: function (userId, updateUser) {
    return User.findByIdAndUpdate(userId, updateUser);
  }
}