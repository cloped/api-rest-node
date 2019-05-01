
module.exports = function (app) {
  app.get('/pagamentos', function (req, res) {
    // console.log('/pagamentos');
    res.send('OK !');
  });

  app.post('/pagamentos/pagamento', function (req, res) {
    const payment = req.body;
    console.log(payment);
    res.send('OK- post');
  });
}
