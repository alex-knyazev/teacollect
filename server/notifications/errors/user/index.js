const { ApolloError } = require('apollo-server-express');

module.exports.UserAlreadyExistsErrorMessages = {
  rus: 'Пользователь с таким email уже существует',
  eng: 'User with such email already exists',
};
// const userIsExistsError = (context) =>  {
//   new ApolloError(mess)
// };
