const TransferController = require('./transfer');
const TransactionDAO = require('../dao/transactionDAO');

module.exports = {
  createTransactionRedirect: function (req, res) {
    const { type } = req.body;

    if (type === 'transfer') {
      TransferController.createTransfer(req, res);
    }
  },

  readTransactions: async function (req, res) {
    const transactions = await TransactionDAO.readTransactions();
    res.status(200).send(transactions);

    console.log('Read all transactions!');
  },

  readUserTransactions: async function (req, res) {
    const { userId } = req.params;
    const userTransactions = await TransactionDAO.readUserTransactions(userId);
    res.status(200).send(userTransactions);

    console.log('Read all transactions from ', userId, '!');
  },
};
