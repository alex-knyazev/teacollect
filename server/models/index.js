const mongoose = require('mongoose');

const tea = require('./tea');
const teaType = require('./teaType');
const user = require('./user');

const Tea = mongoose.model('Tea', tea);
const TeaType = mongoose.model('TeaType', teaType);
const User = mongoose.model('User', user);

module.exports = { Tea, TeaType, User };
