const CheckoutController = require('../controllers/checkout')

module.exports = function (app) {
  app.post('/checkouts/checkout/:userId/:establishmentId', CheckoutController.postCheckout);
  // app.get('/checkouts', CheckoutController.getCheckout);
  // app.put('/checkouts/checkout/:checkoutId', CheckoutController.putCheckout);
  // app.delete('/checkouts/checkout/:checkoutId', CheckoutController.deleteCheckout);
}
