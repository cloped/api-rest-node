const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  moneyAmount: {
    type: [
      {
        value: {
          type: Number,
          required: true,
        },
        coinType: {
          type: String,
          required: false,
        },
        _id: false,
      }
    ],
    required: true,
  },
  registrations: {
    type: [
      {
        registration: {
          type: String,
          required: true,
        },
        establishments: {
          type: [
            {
              id: {
                type: String,
                required: true,
              },
              _id: false,
            }
          ],
          required: true,
        },
        _id: false,
      },
    ],
    required: false,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
