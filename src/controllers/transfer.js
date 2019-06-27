const UserDAO = require('../dao/userDAO');
const transactionDAO = require('../dao/transactionDAO');
const momentTz = require('moment-timezone');


module.exports = {
  createTransfer: async function (req, res) {
    const { providerId, recipientId } = req.params;
    const { value, coinType, type } = req.body;

    const timestamp = momentTz().tz('America/Manaus').format('HH:mm');

    const providerUser = await UserDAO.readUser(providerId);
    const recipientUser = await UserDAO.readUser(recipientId);

    if (providerUser.moneyAmount[0].value >= value) {
      await UserDAO.updateUser(providerId, {
        moneyAmount: [
          {
            value: providerUser.moneyAmount[0].value - value,
            coinType: 'R$',
          }
        ]
      });

      await UserDAO.updateUser(recipientId, {
        moneyAmount: [
          {
            value: recipientUser.moneyAmount[0].value + value,
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
      console.log('Done transfer');
      res.status(201).send({ 'ok': 'ok' });
    } else {
      res.status(400).send({ 'Error': 'Invalid input' })
    }
  },
}
