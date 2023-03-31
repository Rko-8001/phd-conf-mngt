const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const mongoose = require('mongoose');
const Mail = require('nodemailer/lib/mailer');


// connection established
require('../mongoDb/connection');

// nodemailer import
const transporter = require('../credentials/nodeMailerCreds')

// requiring user Schema 
const User = require('../model/userSchema');

// credentials import
require('dotenv').config();



var loginOtp = "696969";
router.post('/login', async (req, res) => {

    const { email, mssg, otp } = req.body;
    var id;
    var role;
    if (!email || !mssg) {
        return res.status(422).json({ error: "Please fill properly.." });
    }
    try {
        const loginuser = await User.findOne({ email: email });
        if (!loginuser) {
            return res.status(423).json({ error: "Invalid Credientials." });
        }
        id = loginuser._id;
        role = loginuser.role;
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: "Invalid Credientials." });
    }
    if (mssg == "otp") {
        console.log("idr");
        loginOtp = Math.random();
        loginOtp = loginOtp * 1000000;
        loginOtp = parseInt(loginOtp);
        console.log("OTP: " + loginOtp);
        try {
            let info = await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL,
                to: email,
                subject: "PCMP Login Requested!",
                html: "<h3>OTP for PCMP Login is </h3>" + "<h1 style='font-weight:bold;'>" + loginOtp + "</h1>" // html body
            });
            return res.status(200).json({ message: "Done" });
        } catch (error) {
            console.log(error);
            return res.status(422).json({ message: "Sorry" });
        }
    }
    else {
        if(loginOtp === otp){
            return res.status(200).json( role + " " + id);
        }
        else {
            return res.status(422).json({ message: "Invalid OTP" });
        }
    }
})


module.exports = router;

