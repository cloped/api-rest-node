const Payment = require('../models/payment');
const _ = require('lodash');

module.exports = {
  // CREATE
  postPayment: function (req, res) {
    const payment = req.body;
    const newPayment = new Payment({
      forma_de_pagamento: payment.forma_de_pagamento,
      valor: payment.valor,
      moeda: payment.moeda,
      descricao: payment.descricao,
      status: 'Criado',
      data: new Date,
    });

    newPayment.save()
      .then(item => {
        res.send(newPayment);
        console.log('Saved a payment!')
      });
  },

  // READ
  getPayment: function (req, res) {
    Payment.find()
      .then(payments => {
        res.send(payments);
        console.log('Retrieved all payments!')
      });
  },

  // UPDATE
  putPayment: function (req, res) {
    const { paymentId } = req.params;
    const { forma_de_pagamento, valor, moeda, descricao, status, date } = req.body;
    let update = { forma_de_pagamento, valor, moeda, descricao, status, date };
    update = _.pickBy(update, _.identity);

    Payment.findByIdAndUpdate(paymentId, update)
      .then(item => {
        response = {
          'status': '200',
          'updatedId': paymentId
        }

        res.send(_.merge(response, item));
        console.log('Updated the payment ', paymentId, '!');
      });
  },

  // DELETE
  deletePayment: function (req, res) {
    const { paymentId } = req.params;
    let response;

    Payment.findByIdAndDelete(paymentId)
      .then(item => {
        response = {
          'status': '200',
          'removedItemId': paymentId
        }

        res.send(response);
        console.log('Deleted the payment ', paymentId, '!');
      })
  },
}