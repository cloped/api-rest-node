const User = require('../models/user');
const UserDAO = require('../dao/userDAO')
const _ = require('lodash');

module.exports = {
  // CREATE
  postUser: function (req, res) {
    const newUser = new User({ ...req.body });

    newUser.save()
      .then(item => {
        res.status(201).send(newUser);
        console.log('Saved a user!')
      });
  },

  // READ
  getUsers: function (req, res) {
    User.find()
      .then(users => {
        res.status(200).send(users);
        console.log('Retrieved all users!')
      });
  },

  getUser: function (req, res) {
    const { userId } = req.params;

    User.findById(userId)
      .then(user => {
        res.status(200).send(user);
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

        res.status(200).send(response);
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

        res.status(200).send(response);
        console.log('Deleted the user ', userId, '!');
      })
  },

  // MISC
  checkUser: async function (req, res) {
    const { cpf, password } = req.body;

    try {
      const user = await User.findOne({ cpf });

      if (password === user.password) {
        res.status(200).send(user);
      } else {
        res.status(400).send({ error: 'Invalid input' });
      }
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  },
}
