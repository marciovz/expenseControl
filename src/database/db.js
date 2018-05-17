const mongoose = require('mongoose');
const dbConfig = require('../config/database.json');

mongoose.connect(dbConfig.url);

module.exports = mongoose;
