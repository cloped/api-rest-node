const EstablishmentDAO = require('../dao/establishmentDAO');
const UserDAO = require('../dao/userDAO');

const moment = require('moment');

const minutesOfDay = function (m) {
  return m.minutes() + m.hours() * 60;
}

module.exports = {
  // CREATE
  postCheckout: async function (req, res) {
    const timeStamp = moment('12:00', 'HH:mm');
    const { establishmentId, userId } = req.params;
    let selectedPrice;

    const establishment = await EstablishmentDAO.readEstablishment(establishmentId);
    establishment.pricing.forEach(element => {
      if (minutesOfDay(moment(element.initTime, 'HH:mm')) < minutesOfDay(timeStamp)
        && minutesOfDay(moment(element.endTime, 'HH:mm')) > minutesOfDay(timeStamp)) {
        selectedPrice = element.price;
      }
    });

    const user = await UserDAO.readUser(userId);
    await UserDAO.updateUser(userId, {
      moneyAmount: [
        {
          value: user.moneyAmount[0].value - selectedPrice,  
          coinType: 'R$',
        }
      ]
    });
    const updatedUser = await UserDAO.readUser(userId);

    res.status(202).send(updatedUser);
  },
}
