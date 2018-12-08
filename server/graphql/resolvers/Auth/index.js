import { hashPassword } from '../../../auth/passwordCrypto';

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
    register: async (obj, args, context) => {
      const {
        input: { username, password },
      } = args;
      const encodedPassword = hashPassword(password);

      const { User } = context.models;
      // const newUser = new User({ email: username, password: encodedPassword });

      return { username: 'asd' };
      // const users = await User.find();
    },
  },
};
