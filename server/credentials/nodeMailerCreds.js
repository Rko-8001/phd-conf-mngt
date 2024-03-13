const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_KEY
    }
    // host: "smtp.forwardemail.net",
    // port: 465,
    // secure: true,
    // auth: {
    //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //     user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    //     pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    // },
});

module.exports = transporter;