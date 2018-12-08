// import * as config from 'config';
// import * as jwt from 'jsonwebtoken';

// import { tokenExpiredError } from '../model/errors/auth';

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

// export default verifyToken;
