const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "debg9ye95",
    api_key: "412159183898988",
    api_secret: "3brAt7NKIbPQY9rtvg0civZf5j0"
  });


// connection established
require('../mongoDb/connection');



// requiring user Schema 
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');


const { genAppToken } = require('../tokens/generateToken');
const fileUpload = require('express-fileupload')


// credentials import
require('dotenv').config();

// student info loading    
router.post('/studentInfoLoading', async (req, res) => {

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
router.post('/studentApplicationSubmit', async (req, res) => {
    const { email, status,
        mobileNo, bankAccountNo,
        nameOfConference, venueOfConference, paperInConference,
        conferenceStarts, conferenceEnds,
        financialSupport,
        advances, finances,
        coaa, coaba, cocba,
        studentLeaveStarts, studentLeaveEnds, image} = req.body;
        console.log("image is: "+image)
        // const file = 

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
                studentLeaveStarts, studentLeaveEnds, image
            });
        await data.save();

        return res.status(200).json({ message: "Application Submitted.." });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Can't submit application. Try Again.." })
    }

});

// apps view
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
        // sorting acc to latest updated.. 
        const data = await AppData.find({ email: email }).sort({ "updatedAt": -1 });

        // console.log(data);
        return res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
})

//creating application token for viewing..
router.post('/createApplicationToken', async (req, res) => {

    const id = req.body.id;
    try {
        const token = await genAppToken(id);
        return res.status(200).json({ appToken: token });
    } catch (error) {
        return res.status(422).json({ error: "cant generate token.." });
    }
    // return res.status(200).json({id: id});
})




module.exports = router;

