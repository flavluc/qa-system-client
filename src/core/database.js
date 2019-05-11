'use strict';

const mongoose = require('mongoose');

const DB_CONFIG = {
  host: 'localhost',
  port: 27017,
  name: 'qa-system',
  mongoOptions: {
    useNewUrlParser: true,
  },
};
const CONNECTION_STRING = `mongodb://${DB_CONFIG.host}:${DB_CONFIG.port}/${DB_CONFIG.name}`;

module.exports = {
  connect: () => mongoose.connect(CONNECTION_STRING, DB_CONFIG.mongoOptions),
  disconnect: () => mongoose.connection.close(),
  mongoose,
};