const EstablishmentController = require('../controllers/establishment')

module.exports = function (app) {
  app.get('/establishments', EstablishmentController.readEstablishments);
  app.get('/establishments/establishment/:establishmentId', EstablishmentController.readEstablishment);
  app.post('/establishments/establishment', EstablishmentController.createEstablishment);
  app.put('/establishments/establishment/:establishmentId', EstablishmentController.updateEstablishment);
  app.delete('/establishments/establishment/:establishmentId', EstablishmentController.deleteEstablishment);
}
