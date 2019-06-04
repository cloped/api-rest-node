const PaymentController = require('../controllers/payment')

module.exports = function (app) {
  app.post('/payments/payment', PaymentController.postPayment);
  app.get('/payments', PaymentController.getPayment);
  app.put('/payments/payment/:paymentId', PaymentController.putPayment);
  app.delete('/payments/payment/:paymentId', PaymentController.deletePayment);
}
