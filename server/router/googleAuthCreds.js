const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: '126415251990-ssgo5jdn53vl6ssa5e3p1m274srspamp.apps.googleusercontent.com',
	clientSecret: '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',
	callbackURL:"http://localhost:5000/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));