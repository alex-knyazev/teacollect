const crypto = require('crypto');
const config = require('config');

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto
    .pbkdf2Sync(
      password,
      salt + config.auth.passwordSecretSalt,
      10000,
      512,
      'sha512',
    )
    .toString('base64');
  return JSON.stringify({ salt, hash });
};

const verifyPasswordWithSalt = (passwordToVerify, passwordFromDB) => {
  const { hash, salt } = JSON.parse(passwordFromDB);
  return (
    hash
    === crypto
      .pbkdf2Sync(
        passwordToVerify,
        salt + config.auth.passwordSecretSalt,
        10000,
        512,
        'sha512',
      )
      .toString('base64')
  );
};

module.exports.verifyPasswordWithSalt = verifyPasswordWithSalt;
module.exports.hashPassword = hashPassword;
