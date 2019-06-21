const Transaction = require('../models/transaction');

module.exports = {
  createTransaction: function (inputTransaction) {
    const newTransaction = new Transaction({ ...inputTransaction });
    return newTransaction.save();
  },

  readTransactions: function () {
    return Transaction.find();
  },

  readUserTransactions: function (userId) {
    const userTransactions = Transaction.find({
      $or: [
        { providerId: userId },
        { recipientId: userId }
      ]
    });

    return userTransactions;
  },
};
