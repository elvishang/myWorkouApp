let passport = require('passport');
let localStrategy = require('passport-local').Strategy;
let User = require('../models/user.js');

passport.serializeUser((user, done) => {
  console.log('userStrategy -- serialized: ', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    if(err) {
      done(err);
    }
    console.log('userStrategy -- deserializeUser');
    console.log('-----------------------------------------------\ndeserialized: ', user.id);
    done(null, user);
  });
});

// Does actual work of logging in
// Called by middleware stack
passport.use('local', new localStrategy({
  passReqToCallback: true,
  usernameField: 'username'
  }, (req, username, password, done) => {
    // mongoose stuff
    User.findOne({username: username}, (err, user) => {
      if(err) {
        throw err;
      }
      console.log('userStrategy -- User.findOne');
      // user variable passed to us from Mongoose if it found a match to findOne() above
      if(!user) {
        // user not found
        console.log('userStrategy.js :: no user found');
        return done(null, false, {message: 'Incorrect credentials.'});
      } else {
        // found user! Now check their given password against the one stored in the DB
        // comparePassword() is defined in the schema/model file!
        user.comparePassword(password, (err, isMatch) => {
          if(err) {
            throw err;
          }

          if(isMatch) {
            // all good, populate user object on the session through serializeUser
            console.log('userStrategy.js :: all good');
            return(done(null, user));
          } else {
            // no good.
            console.log('userStrategy.js :: password incorrect');
            done(null, false, {message: 'Incorrect credentials.'});
          }
        });
      } // end else
    }); // end findOne
  } // end callback
));

module.exports = passport;
