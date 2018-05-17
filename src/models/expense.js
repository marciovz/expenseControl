const db = require('../database/db');

const schema = db.Schema({
  provider: {
    type: String,
    required: true
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
