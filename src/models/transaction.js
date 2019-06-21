const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
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
  timestamp: {
    type: String,
    requirec: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
