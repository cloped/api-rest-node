const Establishment = require('../models/establishment');
const _ = require('lodash');

module.exports = {
  // CREATE
  postEstablishment: function (req, res) {
    const establishment = req.body;
    const newEstablishment = new Establishment({
      name: establishment.name,
      description: establishment.description
    });

    newEstablishment.save()
      .then(item => {
        res.send(newEstablishment);
        console.log('Saved a establishment!')
      });
  },

  // READ
  getEstablishment: function (req, res) {
    Establishment.find()
      .then(establishments => {
        res.send(establishments);
        console.log('Retrieved all establishments!')
      });
  },

  // UPDATE
  putEstablishment: function (req, res) {
    const { establishmentId } = req.params;
    const { name, description } = req.body;
    let update = { name, description };
    update = _.pickBy(update, _.identity);

    Establishment.findByIdAndUpdate(establishmentId, update)
      .then(item => {
        response = {
          'status': '200',
          'updatedId': establishmentId
        }

        res.send(_.merge(response, item));
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
          'status': '200',
          'removedItemId': establishmentId
        }

        res.send(response);
        console.log('Deleted the establishment ', establishmentId, '!');
      })
  },
}
