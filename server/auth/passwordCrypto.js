import crypto from 'crypto';
import config from 'config';

export const hashPassword = (password) => {
  debugger;
  const salt = crypto.randomBytes(16).toString('base64');
  debugger;
  const hash = crypto
    .pbkdf2Sync(
      password,
      salt + config.get('auth.passwordSecretSalt'),
      10000,
      512,
      'sha512',
    )
    .toString('base64');
  debugger;
  return { salt, hash };
};

export const verifyPasswordWithSalt = (password, salt, hash) => hash
  === crypto
    .pbkdf2Sync(
      password,
      salt + config.get('auth.passwordSecretSalt'),
      10000,
      512,
      'sha512',
    )
    .toString('base64');
