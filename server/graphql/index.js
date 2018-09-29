const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

const typeDefsArray = fileLoader(path.join(__dirname, './types'), {
  recursive: true,
});
const resolversArray = require('./resolvers');

module.exports.typeDefs = mergeTypes(typeDefsArray);
module.exports.resolvers = mergeResolvers(resolversArray);
