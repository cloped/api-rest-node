const UserDAO = require('../dao/userDAO');
const transactionDAO = require('../dao/transactionDAO');
const uuidv1 = require('uuid/v1');
const axios = require('axios');
const momentTz = require('moment-timezone');

// {
//   "id": "APP-0HAQKO2OJ94N",
//   "website": "https://asdasd.com.br",
//   "accessToken": "0f71060f10e84e8ca8afdf599ba8eb76_v2",
//   "description": "asdasd",
//   "name": "payzeee",
//   "secret": "fd617ea1ab2b4e1d812640f24ec43a8f",
//   "redirectUri": "https://asdasd.com.br",
//   "createdAt": "2019-06-25T03:04:52.450Z",
//   "updatedAt": "2019-06-25T03:04:52.450Z"
// }

const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

module.exports = {
  createPayment: async function (req, res) {
    const { userId } = req.params;
    const { amount, type } = req.body;

    const user = await UserDAO.readUser(userId);

    const formattedAmount = `${amount.replace(/\./g, '')}`;

    try {
      const responseOrder = await moip.order.create({
        ownId: uuidv1(),
        amount: {
          currency: 'BRL',
        },
        items: [{
          product: 'Saldo',
          quantity: 1,
          price: formattedAmount,
        }],

        customer: {
          id: 'CUS-FHETHR1FY5PO'
        }
      });

      const orderId = responseOrder.body.id;

      try {
        const responsePayment = await moip.payment.create(orderId, {
          installmentCount: 1,
          fundingInstrument: {
            method: 'CREDIT_CARD',
            creditCard: {
              id: 'CRC-5LOFNQ72IU8G',
              cvc: '123',
              holder: {
                fullname: 'Roberto Oliveira',
                birthdate: '1988-12-30',
                taxDocument: {
                  type: 'CPF',
                  number: '84302737950'
                },
                phone: {
                  countryCode: '55',
                  areaCode: '11',
                  number: '25112511'
                }
              }
            }
          }
        });

        const paymentId = responsePayment.body.id;

        try {
          axios.get(`https://sandbox.moip.com.br/simulador/authorize?payment_id=${paymentId}&amount=${formattedAmount}`);
        } catch (e) {
          console.log('axios', e.message)
        }

        if (user.moneyAmount[0].value >= parseFloat(amount)) {
          await UserDAO.updateUser(userId, {
            moneyAmount: [
              {
                value: user.moneyAmount[0].value - parseFloat(amount),
                coinType: 'R$',
              }
            ]
          });

          const newTransaction = {
            providerId: userId,
            recipientId: 'payzee',
            value: parseFloat(amount),
            coinType: 'R$',
            timestamp: momentTz().tz('America/Manaus').format('HH:mm'),
            type,
          }

          await transactionDAO.createTransaction(newTransaction);

          res.status(200).send({ ok: responsePayment });
        } else {
          throw new Error('Invalid Input');
        }
      } catch (e) {
        console.log(e.message)
        res.status(500).send({ 'pay': e.message });
      }
    } catch (e) {
      console.log(e.message)
      res.status(500).send({ 'order': e.message });
    }
  },
}
