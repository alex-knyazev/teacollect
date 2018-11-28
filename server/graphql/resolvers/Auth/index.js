module.exports = {
  Mutation: {
    login: async (obj, args, context) => {
      const {
        input: { username, password },
      } = args;

      const { User } = context.models;

      const user = await User.find({ username });
      return { username: 'asd' };
      // const users = await User.find();
    },
  },
};
