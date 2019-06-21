const CheckoutController = require('../controllers/checkout')

module.exports = function (app) {
  app.post('/checkouts/checkout/:userId/:establishmentId', CheckoutController.createCheckout);
}
