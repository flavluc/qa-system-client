'use strict';

const PerguntaModel = require('./pergunta.model');

module.exports = function(query) {
  return PerguntaModel.findOne(query);
};
