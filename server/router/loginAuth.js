const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const Mail = require('nodemailer/lib/mailer');


// connection established
require('../mongoDb/connection');


// requiring user Schema 
const User = require('../model/userSchema');



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'icpc.team7@gmail.com',
        pass: 'ajildywjmufezfzs'
    }
});
var loginOtp = "696969";
router.post('/login', async (req, res) => {

    const { email, mssg, otp } = req.body;
    if (!email || !mssg) {
        return res.status(422).json({ error: "Please fill properly.." });
    }
    try {
        const loginuser = await User.findOne({ email: email });
        if (!loginuser) {
            return res.status(423).json({ error: "Invalid Credientials." });
        }
        // console.log(loginuser);
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
                from: 'icpc.team7@gmail.com',
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
        if(loginOtp == otp){
            return res.status(200).json({message: "login success.."});
        }
        else {
            return res.status(422).json({ message: "Invalid OTP" });
        }
    }
})


module.exports = router;

