const TransactionController = require('../controllers/transaction');

module.exports = function (app) {
  app.get('/transactions', TransactionController.readTransactions);
  app.get('/transactions/:userId', TransactionController.readUserTransactions);
  app.post('/transactions/transaction', TransactionController.createTransactionRedirect);
}
