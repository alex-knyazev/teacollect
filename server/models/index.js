const mongoose = require('mongoose');

const tea = require('./tea');

const Tea = mongoose.model('Tea', tea);

module.exports = {
  Tea,
};
