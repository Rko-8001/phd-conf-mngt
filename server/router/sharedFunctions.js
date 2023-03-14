const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');



//  status: Application Submitted       0
router.post('/applicationPendingFaculty', async (req,res) => {
    
    try {
        const status = "0";
        const appData = await AppData.find({status: status});
        
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
router.post('/applicationDisapprovedFaculty', async (req,res) => {
    
    try {
        const status = "-1";
        const appData = await AppData.find({status: status});
        
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
router.post('/applicationApprovedFaculty', async (req,res) => {

    try {
        const status = "1";
        const appData = await AppData.find({status: status});
        
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
router.post('/applicationApprovedResearch', async (req,res) => {

    try {
        const status = "2";
        const appData = await AppData.find({status: status});
        
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


//  status: Research DisApproval            -2
router.post('/applicationDisapprovedResearch', async (req,res) => {

    try {
        const status = "2";
        const appData = await AppData.find({status: status});
        
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