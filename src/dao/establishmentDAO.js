const Establishment = require('../models/establishment');

module.exports = {
  createEstablishment: function (inupdateEstablishment) {
    const newEstablishment = new Establishment({ ...inupdateEstablishment });
    return newEstablishment.save();
  },

  readEstablishments: function () {
    return Establishment.find();
  },

  readEstablishment: function (establishmentId) {
    return Establishment.findById(establishmentId);
  },
}