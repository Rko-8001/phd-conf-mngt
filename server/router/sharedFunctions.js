const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');

// credentials import
require('dotenv').config();

// info Loading 
router.post('/infoLoading', async (req, res) => {

    const bearerHeader = await req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Token: " + bearerToken);

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
})

//  status: Application Submitted       0
router.post('/applicationPendingFaculty', async (req, res) => {

    try {
        const status = "0";
        const appData = await AppData.find({ status: status });

        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

// status: Faculty DisApproval          -1
router.post('/applicationDisapprovedFaculty', async (req, res) => {

    try {
        const status = "-1";
        const appData = await AppData.find({ status: status });

        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

//  status:  Faculty Approval            1
router.post('/applicationApprovedFaculty', async (req, res) => {

    try {
        const status = "1";
        const appData = await AppData.find({ status: status });

        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
})

//  status: Research Approval            2
router.post('/applicationApprovedResearch', async (req, res) => {

    try {
        const status = "2";
        const appData = await AppData.find({ status: status });

        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

//  status: Research DisApproval         -2
router.post('/applicationDisapprovedResearch', async (req, res) => {

    try {
        const status = "2";
        const appData = await AppData.find({ status: status });

        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

// student Info 
router.post('/studentInfoAdmin', async (req, res) => {
    const { semail, femail } = req.body;
    try {
        const appData = await AppData.find({ email: semail });
        return res.status(200).json(appData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

// view applications
router.get('/viewAllApplication', async (req, res) => {

    try {
        // sorting using last updated 
        // recently updated somes first --
        const data = await AppData.find().sort({ "updatedAt": -1 });
        return res.status(200).json({ data: data });

    } catch (error) {
        return res.status(422).json({ error: error })
    }
})

// view specfic application
router.post('/viewAnApplication', async (req, res) => {

    // bearer header 'Bearer token'
    const bearerHeader = await req.headers["authorization"];

    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "App Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }

    // verfiy the token
    var decode;
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }

    const id = decode.id;

    try {
        const data = await AppData.findById(id);
        const user = await User.findOne({ email: data.email });
        return res.status(200).json({ data: data, applicantInfo: user });
    } catch (error) {
        return res.status(422).json({ error: error });

    }
})



// Experimental ***     Success 
router.get('/aisehi', async (req, res) => {
    try {
        // can be used -- 
        // -1 print lastest first 
        // 1 print oldest first
        const appData = await AppData.find().sort({ "updatedAt": 1 });
        return res.status(200).json({ "Data": appData });
    } catch (error) {
        return res.status(422).json({ "error": error });
    }
})


module.exports = router;