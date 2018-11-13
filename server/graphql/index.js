import resolversArray from './resolvers';

const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

const typeDefsArray = fileLoader(path.join(__dirname, './types'), {
  recursive: true,
});

module.exports.typeDefs = mergeTypes(typeDefsArray);
module.exports.resolvers = mergeResolvers(resolversArray);
