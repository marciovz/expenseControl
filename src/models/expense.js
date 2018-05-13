const db = require('../database/db');

const schema = db.Schema({
  account: {
    type: Number,
    required: true
  },
  provider: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  dateExpense: {
    type: Date,
    required: true
  },
  status: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});


module.exports = db.model('expense', schema);
