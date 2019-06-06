const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckoutSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  establishmentId: {
    type: String,
    required: true,
  },
  timeNow: {
    type: String,
    required: true,
  },
  coin: {
    type: String,
    required: false,
  },
});

module.exports = Checkout = mongoose.model('checkout', CheckoutSchema);
