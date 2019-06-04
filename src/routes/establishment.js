const EstablishmentController = require('../controllers/establishment')

module.exports = function (app) {
  app.post('/establishments/establishment', EstablishmentController.postEstablishment);
  app.get('/establishments', EstablishmentController.getEstablishment);
  app.put('/establishments/establishment/:establishmentId', EstablishmentController.putEstablishment);
  app.delete('/establishments/establishment/:establishmentId', EstablishmentController.deleteEstablishment);
}
