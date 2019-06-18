const TransferController = require('../controllers/transfer')

module.exports = function (app) {
  app.post('/transfers/transfer/:providerId/:recipientId', TransferController.postTransfer);
  // app.get('/transfers', TransferController.getTransfers);
  // app.get('/transfers/establishment/:establishmentId', TransferController.getEstablishment);
  // app.put('/transfers/establishment/:establishmentId', TransferController.putEstablishment);
  // app.delete('/transfers/establishment/:establishmentId', TransferController.deleteEstablishment);
}
