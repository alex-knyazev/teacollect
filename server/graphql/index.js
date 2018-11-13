import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import resolversArray from './resolvers';

const typeDefsArray = fileLoader(path.join(__dirname, './types'), {
  recursive: true,
});

export const typeDefs = mergeTypes(typeDefsArray);
export const resolvers = mergeResolvers(resolversArray);
