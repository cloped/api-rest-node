const UserDAO = require('../dao/userDAO');

module.exports = {
  // CREATE
  postTransfer: async function (req, res) {
    const { providerId, recipientId } = req.params;
    const { value, coinType } = req.body;

    const providerUser = await UserDAO.readUser(providerId);
    const recipientUser = await UserDAO.readUser(recipientId);

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

    const providerUpdated = await UserDAO.readUser(providerId);
    const recipientUpdated = await UserDAO.readUser(recipientId);

    res.status(201).send({'ok': 'ok'});
  },
}
