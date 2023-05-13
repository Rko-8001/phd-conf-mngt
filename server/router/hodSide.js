const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');

// credentials import
require('dotenv').config();

const searchDriveFolder = require('../driveUploadFunctions/searchFolder');
const uploadImageDrive = require('../driveUploadFunctions/uploadImage');
const createPublicUrl = require('../driveUploadFunctions/createPublicUrl');

router.post('/viewHodApplications', async (req, res) => {

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
    try {
        var decode = jwt.verify(bearerToken, process.env.JWT_SECRET)

        // //setting email and role from decode
        const facultyEmail = decode.email;
        const appData = await AppData.find().sort({ "updatedAt": -1 });

        var filteredData = new Array();
        const user = await User.find();
        for (let i = 0; i < user.length; i++) {
            if (user[i].role === "1") {
                if (facultyEmail === user[i].emailOfSupervisor) {
                    const appData = await AppData.find({ email: user[i].email });

                    // bug was here 
                    appData.forEach(element => {
                        filteredData.push(element);
                    });
                }
            }
        }
        return res.status(200).json({ data: filteredData });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

router.post('/hodApproveOrDisapprove', async (req, res) => {
    var { id, status, image } = req.body;

    try {

        const bearerHeader = await req.headers["authorization"];

        if (!bearerHeader) {
            return res.status(422).json({ error: "No Header" });
        }
        var bearerToken = bearerHeader.split(" ")[1];

        if (!bearerToken) {
            console.log("No Token");
            return res.status(422).json({ error: "No Token" });
        }
        // verfiy the token
        var decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
        //setting email from decode
        const userEmail = decode.email;

        const appData = await AppData.findById(id);

        if (appData.status !== "1")
            return res.status(422).json("Can't Approve Or Disapprove..");


        const applicationFolderName = appData.conferenceStarts + "-" + appData.conferenceEnds + "__" + appData.nameOfConference;
        const applicationFolderId = await searchDriveFolder(applicationFolderName);
        const hodSignId = await uploadImageDrive(image, applicationFolderId, userEmail, "hodSign.jpg");

        if (hodSignId === null) {
            console.log("Error");
            return res.status(422).json("Error Occurred..");
        }

        const hodSignLink = await createPublicUrl(hodSignId);
        console.log(hodSignLink);
        await AppData.findByIdAndUpdate(id, {
            lastModified: userEmail,
            hodSignLink: hodSignLink,
            status: status,
        });

        return res.status(200).json("Updated..");
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

module.exports = router;