const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = Establishment = mongoose.model('establishment', EstablishmentSchema);
