const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferSchema = new Schema({
  providerId: {
    type: String,
    required: true,
  },
  recipientId: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  coinType: {
    type: String,
    required: false,
  },
  timeStamp: {
    type: Date,
    requirec: true,
  }
});

module.exports = Checkout = mongoose.model('checkout', TransferSchema);
