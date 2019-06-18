const User = require('../models/user');
const _ = require('lodash');

module.exports = {
  // CREATE
  postUser: function (req, res) {
    const newUser = new User({ ...req.body });

    newUser.save()
      .then(item => {
        res.send(newUser);
        console.log('Saved a user!')
      });
  },

  // READ
  getUsers: function (req, res) {
    User.find()
      .then(users => {
        res.send(users);
        console.log('Retrieved all users!')
      });
  },

  getUser: function (req, res) {
    const { userId } = req.params;

    User.findById(userId)
      .then(user => {
        res.send(user);
        console.log('Retrieved one user!')
      });
  },

  // UPDATE
  putUser: function (req, res) {
    const { userId } = req.params;
    const update = req.body;
    console.log(userId, update);

    User.findByIdAndUpdate(userId, update)
      .then(item => {
        response = {
          'updatedId': userId
        }

        res.send(response);
        console.log('Updated the user ', userId, '!');
      });
  },

  // DELETE
  deleteUser: function (req, res) {
    const { userId } = req.params;
    let response;

    User.findByIdAndDelete(userId)
      .then(item => {
        response = {
          'status': '200',
          'removedItemId': userId
        }

        res.send(response);
        console.log('Deleted the user ', userId, '!');
      })
  },
}
