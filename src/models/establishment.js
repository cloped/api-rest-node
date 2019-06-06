const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  pricing: {
    type: [
      {
        ticketType: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        coin: {
          type: String,
          required: true,
        },
        initTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        _id: false,
      }
    ],
    required: true,
  },
});

module.exports = Establishment = mongoose.model('establishment', EstablishmentSchema);
