const UserController = require('../controllers/user')

module.exports = function (app) {
  app.get('/users', UserController.getUsers);
  app.get('/users/user/:userId', UserController.getUser);
  app.post('/users/user', UserController.postUser);
  app.put('/users/user/:userId', UserController.putUser);
  app.delete('/users/user/:userId', UserController.deleteUser);
}
