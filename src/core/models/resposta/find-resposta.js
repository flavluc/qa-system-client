'use strict';

const RespostaModel = require('./resposta.model');

module.exports = function(query) {
  return RespostaModel.findOne(query);
};
