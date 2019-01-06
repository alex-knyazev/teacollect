const mongoose = require('mongoose');

let connection;
const getDBConnection = async (dbURL) => {
  if (connection) {
    return connection;
  }
  connection = await mongoose.connect(
    dbURL,
    { seNewUrlParser: true },
  );
  return connection;
};

module.exports = getDBConnection;
