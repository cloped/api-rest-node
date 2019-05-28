const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  forma_de_pagamento: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  moeda: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Payment = mongoose.model('payment', PaymentSchema);
