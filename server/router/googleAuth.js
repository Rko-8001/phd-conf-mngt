const express = require('express');
const router = express();

const cookieSession = require('cookie-session');
const passport = require('passport');
// credentials import 
require('../credentials/googleAuthCreds');


// credentials import
require('dotenv').config();

// imported schema
const User = require('../model/userSchema');

// imported token gen
const { genUserToken } = require('../tokens/generateToken')


// cookie Session 
router.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));
router.use(passport.initialize());
router.use(passport.session());


            // for testing google auth
router.get('/', (req, res) => {
    res.send("<a href='/auth'>Login With Google</a>")
});


// Auth logic
router.get('/auth', passport.authenticate('google', {
    scope:
        ['email', 'profile']
}));

// Auth Callback
router.get('/auth/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
    }));

// if login success logic
router.get('/auth/callback/success', async (req, res) => {
    if (!req.user) {
        res.redirect('/auth/callback/failure');
    }
    console.log("heelo");
    const email = req.user.email;
    try {
        const loginuser = await User.findOne({ email: email });
        if (!loginuser) {
            console.log("hi");
            return res.status(422).json({ error: "Invalid Credentials." });
            // res.send("<h1>Invalid Credientials</h1>");
        }
        else {
            const token = await genUserToken(email, loginuser.role);
            return res.status(200).json({token: token});
            // return res.status(200).json(loginuser.role + " " + req.user.email);
            // res.send("<h1>Hello</h1>");

        }
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: "Invalid Credientials." });
        // res.send("<h1>Error Occurred. </h1>");
    }
});

// failure logic 
router.get('/auth/callback/failure', (req, res) => {
    res.send("Error");
})


module.exports = router;
