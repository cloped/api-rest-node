const EstablishmentDAO = require('../dao/establishmentDAO');
const UserDAO = require('../dao/userDAO');

const moment = require('moment');
const momentTz = require('moment-timezone');

const minutesOfDay = function (m) {
  return m.minutes() + m.hours() * 60;
}

module.exports = {
  createCheckout: async function (req, res) {
    const timestamp = momentTz().tz('America/Manaus').format('HH:mm');
    const { providerId, recipientId } = req.params;
    let selectedPrice;

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

    console.log('Created checkout');
    res.status(201).send(updatedUser);
  },
}
