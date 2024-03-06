const bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const expressSession = require('cookie-session');

const saltRounds = 10;

// Hash a password
async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    return `Internal server error from hashing password: ${error}`;
  }
}

// Compare a password with a hash
async function comparePassword(password, hash) {
  try {
    const hashedPassword = await bcrypt.compare(password, hash);
    return hashedPassword;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw new Error(`Internal server error from comparing passwords: ${error}`);
  }
}

passport.use(new GoogleStrategy({
  clientID:'101321294716-db3abp2c770u1spr31relho5l8gqqv9i.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: '/auth/google/callback',
  passReqToCallback: true

}, 
async (req, accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await prisma.User.findUnique({
      where: { email: profile.emails[0].value }
    });
    if (existingUser) {
      console.log('User already exists')
      return done(null, existingUser);
    } else {
      const newUser = await prisma.User.create( {
        data: {
          firstname: profile.name.givenName,
          email: profile.emails[0].value,
          password: profile.password
        }
      });
      return done(null, newUser)

    }
  } catch (error) {
    console.error('Error creating user:', error);
    return done(error);
  }
}

));

module.exports = { hashPassword, comparePassword };
