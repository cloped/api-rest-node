const Payment = require('../database/payment')

module.exports = function (app) {
  app.get('/pagamentos', function (req, res) {

    app.config.databaseConnection(() => {
      return new Promise((resolve, reject) => {
        Payment.find()
          .then(payments => {
            res.send(payments);
            resolve();
          });
      });
    });
  });

  app.post('/pagamentos/pagamento', function (req, res) {
    const payment = req.body;
    const newPayment = new Payment({
      forma_de_pagamento: payment.forma_de_pagamento,
      valor: payment.valor,
      moeda: payment.moeda,
      descricao: payment.descricao,
      status: 'Criado',
      data: new Date,
    });

    app.config.databaseConnection(() => {
      return new Promise((resolve, reject) => {
        newPayment.save()
          .then(item => {
            res.send(newPayment);
            resolve();
          });
      });
    });
  });
}
