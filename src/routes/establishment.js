const EstablishmentController = require('../controllers/establishment')

module.exports = function (app) {
  app.get('/establishments', EstablishmentController.getEstablishments);
  app.get('/establishments/establishment/:establishmentId', EstablishmentController.getEstablishment);
  app.post('/establishments/establishment', EstablishmentController.postEstablishment);
  app.put('/establishments/establishment/:establishmentId', EstablishmentController.putEstablishment);
  app.delete('/establishments/establishment/:establishmentId', EstablishmentController.deleteEstablishment);
}
