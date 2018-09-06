const path = require('path');
const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require('merge-graphql-schemas');

const typeDefsArray = fileLoader(path.join(__dirname, './types'));
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

module.exports.typeDefs = mergeTypes(typeDefsArray, { all: true });
module.exports.resolvers = mergeResolvers(resolversArray);
