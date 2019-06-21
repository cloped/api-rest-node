const Establishment = require('../models/establishment');
const EstablishmentDAO = require('../dao/establishmentDAO');
const _ = require('lodash');
const moment = require('moment');

module.exports = {
  createEstablishment: async function (req, res) {
    const inputEstablishment = req.body;

    const newEstablishment = await EstablishmentDAO.createEstablishment(inputEstablishment);
    res.status(201).send(newEstablishment);

    console.log('Saved a establishment!');
  },

  readEstablishments: async function (req, res) {
    const establishments = await EstablishmentDAO.readEstablishments();
    res.status(200).send(establishments);

    console.log('Retrieved all establishments!');
  },

  readEstablishment: function (req, res) {
    const { establishmentId } = req.params;

    Establishment.findById(establishmentId)
      .then(establishment => {
        res.status(200).send(establishment);
        console.log('Retrieved one establishment!')
      });
  },

  updateEstablishment: function (req, res) {
    const { establishmentId } = req.params;
    const update = req.body;

    Establishment.findByIdAndUpdate(establishmentId, update)
      .then(item => {
        response = {
          'updatedId': establishmentId
        }

        res.status(200).send(response);
        console.log('Updated the establishment ', establishmentId, '!');
      });
  },

  deleteEstablishment: function (req, res) {
    const { establishmentId } = req.params;
    let response;

    Establishment.findByIdAndDelete(establishmentId)
      .then(item => {
        response = {
          'removedItemId': establishmentId
        }

        res.status(200).send(response);
        console.log('Deleted the establishment ', establishmentId, '!');
      })
  },
}
