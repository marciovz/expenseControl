const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/controlExpenses');

module.exports = mongoose;
