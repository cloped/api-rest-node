const Establishment = require('../models/establishment');
const _ = require('lodash');

module.exports = {
  // CREATE
  postEstablishment: function (req, res) {
    const establishment = req.body;
    const formatHelpDate = '01/01/2011'

    // TODO validate all fields
    establishment.pricing.forEach(price => {
      if (isNaN(Date.parse(`${formatHelpDate} ${price.initTime}`)) || isNaN(Date.parse(`${formatHelpDate} ${price.endTime}`))) {
        throw new Error;
      }
    });

    const newEstablishment = new Establishment({ ...establishment });

    newEstablishment.save()
      .then(item => {
        res.status(201).send(item);
        console.log('Saved a establishment!')
      });
  },

  // READ
  getEstablishments: function (req, res) {
    Establishment.find()
      .then(establishments => {
        res.status(200).send(establishments);
        console.log('Retrieved all establishments!')
      });
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
