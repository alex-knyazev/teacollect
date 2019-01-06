// Init passport
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports.createToken = async (payload) => {
  console.log(config.auth.accessTokenLifeTime);
  return jwt.sign(
    {
      ...payload,
    },
    config.auth.accessTokenSalt,
    { expiresIn: config.auth.accessTokenLifeTime },
  );
};

// const * as config = require ('config');
// const * as jwt = require ('jsonwebtoken');

// const { tokenExpiredError } = require ('../model/errors/auth');

// /**
//  * // This function is called at each request to the database
//  * @param getUserById function which return user info by ID
//  * @param token token which comes by client-side request
//  */
// const verifyToken = async (token: string, mode: string) => {
//   return (
//     new Promise() <
//     any >
//     ((res, rej) => {
//       jwt.verify(
//         token,
//         config.get < string > `${modeToConfig[mode]}.salt`,
//         async (jwtError, decoded) => {
//           if (jwtError) {
//             // if(jwtError.name === 'jwtTokenExpired')
//             return rej(new tokenExpiredError());
//           }
//           // unix time in seconds when token will become expired
//           const { objectId, objectRoleId, isEmailConfirmed, role } = decoded;
//           return res({
//             id: objectId,
//             roleId: objectRoleId,
//             isEmailConfirmed,
//             role,
//           });
//         },
//       );
//     })
//   );
// };

// module.exports = verifyToken;

module.exports.verifyToken = (token) => {
  return true;
};
