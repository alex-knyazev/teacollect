const create = require('./create');

module.exports = {
  Query: {
    users: async (obj, args, context) => {
      const { User } = context.models;
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createUser: async (obj, args, context) => {
      const user = await create(args, context);
      return user;
    },
  },
};
