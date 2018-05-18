const db = require('../database/db');

const schema = db.Schema({
  userId: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = db.model('account', schema);
