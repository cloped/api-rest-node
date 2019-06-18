const Establishment = require('../models/establishment');

module.exports = {
  createEstablishment: function (inputEstablishment) {
    const newEstablishment = new Establishment({ ...inputEstablishment });
    return newEstablishment.save();
  },

  readEstablishments: function () {
    return Establishment.find();
  },

  readEstablishment: function (establishmentId) {
    return Establishment.findById(establishmentId);
  },
}