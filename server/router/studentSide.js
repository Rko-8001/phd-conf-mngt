const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


// connection established
require('../mongoDb/connection');



// requiring user Schema 
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');


// credentials import
require('dotenv').config();

// student info loading    
router.post('/studentInfoLoading', async (req, res) => {

    const bearerHeader = await req.headers["authorization"];
    console.log();
    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Student Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }

    // verfiy the token
    var decode
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }


    //setting email and role from decode
    const role = decode.role;
    const email = decode.email;


    // fetching data from mongo
    try {
        const student = await User.findOne({ email: email });
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});


// submitting application 
// Statuses
router.post('/studentApplicationSubmit', async (req, res) => {
    const { email, status,
        mobileNo, bankAccountNo,
        nameOfConference, venueOfConference, paperInConference,
        conferenceStarts, conferenceEnds,
        financialSupport,
        advances, finances,
        coaa, coaba, cocba,
        studentLeaveStarts, studentLeaveEnds } = req.body;

    // console.log(email + " " + financialSupport + " " + coaa);
    // console.log(mobileNo + " " + bankAccountNo);
    // console.log(nameOfConference + " " + venueOfConference + " " + paperInConference);
    // console.log(conferenceStarts + " " + conferenceEnds);
    // console.log(studentLeaveStarts + " " + studentLeaveEnds);
    try {
        const data = new AppData(
            {
                email, status,
                mobileNo, bankAccountNo,
                nameOfConference, venueOfConference, paperInConference,
                conferenceStarts, conferenceEnds,
                financialSupport,
                advances, finances,
                coaa, coaba, cocba,
                studentLeaveStarts, studentLeaveEnds
            });
        await data.save();

        return res.status(200).json({ message: "Application Submitted.." });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Can't submit application. Try Again.." })
    }

});


// router.post('/studentApplicationView', verifyStudentToken, async(req, res) => {
router.post('/studentApplicationView', async (req, res) => {

    // bearer header 'Bearer token'
    const bearerHeader = await req.headers["authorization"];

    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Student Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }

    // verfiy the token
    var decode
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }


    //setting email from decode
    const email = decode.email;
    const status = "0";
    try {
        // const data = await AppData.find({ email: email, status: status});
        const data = await AppData.find({ email: email});

        // console.log(data);
        return res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
})



module.exports = router;

