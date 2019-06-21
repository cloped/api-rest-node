const TransactionController = require('../controllers/transaction')

module.exports = function (app) {
  app.post('/transactions/transaction/:providerId/:recipientId', TransactionController.createTransactionRedirect);
}
