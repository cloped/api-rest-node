const TransactionController = require('../controllers/transaction');
const PaymentController = require('../controllers/payment');

module.exports = function (app) {
  app.get('/transactions', TransactionController.readTransactions);
  app.get('/transactions/:userId', TransactionController.readUserTransactions);
  app.post('/transactions/transaction/:providerId/:recipientId', TransactionController.createTransactionRedirect);
  app.post('/transactions/payment/:userId', PaymentController.createPayment);
}
