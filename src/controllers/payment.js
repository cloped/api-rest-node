const UserDAO = require('../dao/userDAO');
const transactionDAO = require('../dao/transactionDAO');

module.exports = {
  createPayment: async function (req, res) {
    const { providerId, recipientId } = req.params;
    const { value, coinType, type, timestamp } = req.body;

    const providerUser = await UserDAO.readUser(providerId);

    if (providerUser.moneyAmount[0].value >= value) {
      await UserDAO.updateUser(providerId, {
        moneyAmount: [
          {
            value: providerUser.moneyAmount[0].value - value,
            coinType: 'R$',
          }
        ]
      });

      const newTransaction = {
        providerId,
        recipientId,
        value,
        coinType,
        timestamp,
        type,
      }

      await transactionDAO.createTransaction(newTransaction);

      res.status(201).send({ 'ok': 'ok' });
    } else {
      res.status(400).send({ 'Error': 'Invalid input' })
    }
  },
}
