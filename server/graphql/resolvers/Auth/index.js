const { ApolloError, AuthenticationError } = require('apollo-server-express');
const {
  hashPassword,
  verifyPasswordWithSalt,
} = require('../../../auth/passwordCrypto');
const { createToken } = require('../../../auth/tokenCrypto');

const {
  UserAlreadyExistsErrorMessages,
} = require('../../../notifications/errors/user');

module.exports = {
  Mutation: {
    login: async (obj, args, context) => {
      const {
        input: { email, password: clientPassword },
      } = args;

      const { User } = context.models;

      const user = await User.find({ email });

      const { password: passwordFromDB } = user;
      const isPasswordRight = verifyPasswordWithSalt(
        clientPassword,
        passwordFromDB,
      );

      if (!isPasswordRight) {
        throw new Error('password is wrong');
      }
      const token = createToken(user);

      return { token };
    },
    register: async (obj, args, context) => {
      const {
        input: { email, password },
      } = args;
      const { User } = context.models;
      const userWithSameEmail = await User.find({ email });
      if (userWithSameEmail.length > 0) {
        throw new ApolloError(UserAlreadyExistsErrorMessages['eng'], '1');
      }
      const encodedPassword = hashPassword(password);
      const newUser = new User({
        email,
        password: encodedPassword,
      });
      newUser.save();
      const token = await createToken({ email });
      return { token };
    },
  },
};
