const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('../graphql');
const models = require('../models');

const createApolloServer = (connection) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const language = req.headers.language;
      return {
        language,
        reqHeaders: req.headers,
        models,
        connection,
      };
    },
    formatError: (error) => {
      console.log(error);
      if (
        error.extensions
        && error.extensions.code === 'INTERNAL_SERVER_ERROR'
      ) {
        return {
          message: 'Internal server error',
        };
      }
      return error;
    },
  });

  return server;
};

module.exports = createApolloServer;
