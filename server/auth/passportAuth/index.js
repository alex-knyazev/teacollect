const passport = require('passport');

const passportJWT = require('passport-jwt');
const { Strategy: AnonymousStrategy } = require('./Anonymous');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret',
    },
    (jwtPayload, cb) => {
      debugger;
      // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return cb(null, { user: 22 });
      // return UserModel.findOneById(jwtPayload.id)
      //   .then((user) => {
      //     return cb(null, user);
      //   })
      //   .catch((err) => {
      //     return cb(err);
      //   });
    },
  ),
);

passport.use(new AnonymousStrategy());

module.exports = [
  passport.authenticate(['jwt', 'authenticate-as-anonymous'], {
    session: false,
  }),
];
