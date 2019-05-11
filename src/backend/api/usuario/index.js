'use strict';

module.exports = async function(fastify) {
  fastify.register(require('./find-all-usuarios'));
  fastify.register(require('./signup-usuario'));
  fastify.register(require('./find-usuario'));
  fastify.register(require('./login-usuario'));
  fastify.register(require('./logout-usuario'));
  fastify.register(require('./update-usuario'));
  fastify.register(require('./delete-usuario'));
  fastify.register(require('./profile-picture-upload'));
};