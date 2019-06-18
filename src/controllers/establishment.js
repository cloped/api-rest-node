const Establishment = require('../models/establishment');
const EstablishmentDAO = require('../dao/establishmentDAO');
const _ = require('lodash');
const moment = require('moment');

module.exports = {
  // CREATE
  postEstablishment: async function (req, res) {
    const inputEstablishment = req.body;
    // const configDate = '03-04-1992';

    // inputEstablishment.pricing.forEach(element => {
    //   element.initTime = moment(new Date(`${configDate} ${element.initTime}`)).format('HH:mm');
    //   element.endTime = moment(new Date(`${configDate} ${element.endTime}`)).format('HH:mm');
    // });
    const newEstablishment = await EstablishmentDAO.createEstablishment(inputEstablishment);
    res.status(201).send(newEstablishment);
    console.log('Saved a establishment!');
  },

  // READ
  getEstablishments: async function (req, res) {
    const establishments = await EstablishmentDAO.readEstablishments();
    res.status(200).send(establishments);
    console.log('Retrieved all establishments!');
  },

  getEstablishment: function (req, res) {
    const { establishmentId } = req.params;

    Establishment.findById(establishmentId)
      .then(establishment => {
        res.status(200).send(establishment);
        console.log('Retrieved one establishment!')
      });
  },

  // UPDATE
  putEstablishment: function (req, res) {
    const { establishmentId } = req.params;
    const update = req.body;

    Establishment.findByIdAndUpdate(establishmentId, update)
      .then(item => {
        response = {
          'updatedId': establishmentId
        }

        res.send(response);
        console.log('Updated the establishment ', establishmentId, '!');
      });
  },

  // DELETE
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
