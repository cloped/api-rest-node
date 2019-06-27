const EstablishmentDAO = require('../dao/establishmentDAO');
const UserDAO = require('../dao/userDAO');
const transactionDAO = require('../dao/transactionDAO');

const moment = require('moment');
const momentTz = require('moment-timezone');

const minutesOfDay = function (m) {
  return m.minutes() + m.hours() * 60;
}

module.exports = {
  createCheckout: async function (req, res) {
    const timestamp = momentTz().tz('America/Manaus').format('HH:mm');
    const { providerId, recipientId } = req.params;
    const { type } = req.body;
    let selectedPrice;
    console.log('checkout');
    const establishment = await EstablishmentDAO.readEstablishment(recipientId);
    establishment.pricing.forEach(element => {
      if (minutesOfDay(moment(element.initTime, 'HH:mm')) < minutesOfDay(moment(timestamp, 'HH:mm'))
        && minutesOfDay(moment(element.endTime, 'HH:mm')) > minutesOfDay(moment(timestamp, 'HH:mm'))) {
        selectedPrice = element.price;
      }
    });

    const user = await UserDAO.readUser(providerId);
    await UserDAO.updateUser(providerId, {
      moneyAmount: [
        {
          value: user.moneyAmount[0].value - selectedPrice,
          coinType: 'R$',
        }
      ]
    });
    const updatedUser = await UserDAO.readUser(providerId);

    const newTransaction = {
      providerId,
      recipientId,
      value: selectedPrice,
      coinType: 'R$',
      timestamp: momentTz().tz('America/Manaus').format('HH:mm'),
      type,
    }

    await transactionDAO.createTransaction(newTransaction);

    console.log('Done checkout');
    res.status(201).send(updatedUser);
  },
}
