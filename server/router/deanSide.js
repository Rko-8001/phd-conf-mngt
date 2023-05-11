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

router.post('/deanApproveOrDisapprove', async (req, res) => {
    var { id, status, image } = req.body;

    try {

        const bearerHeader = await req.headers["authorization"];

        if (!bearerHeader) {
            return res.status(422).json({ error: "No Header" });
        }
        var bearerToken = bearerHeader.split(" ")[1];

        // console.log( "Student Side Token: " + bearerToken);
        if (!bearerToken) {
            console.log("No Token");
            return res.status(422).json({ error: "No Token" });
        }

        // verfiy the token
        var decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
        //setting email from decode
        const userEmail = decode.email;

        const appData = await AppData.findById(id);

        if (appData.status !== "4")
            return res.status(422).json("Can't Approve Or Disapprove..");


        const applicationFolderName = appData.conferenceStarts + "-" + appData.conferenceEnds + "__" + appData.nameOfConference;
        const applicationFolderId = await searchDriveFolder(applicationFolderName);
        const deanSignId = await uploadImageDrive(image, applicationFolderId, userEmail, "deanSign.jpg");

        if (deanSignId === null) {
            return res.status(422).json("Error Occurred..");
        }

        const deanSignLink = await createPublicUrl(deanSignId);
        console.log(deanSignLink);
        await AppData.findByIdAndUpdate(id, {
            lastModified: userEmail,
            deanSignLink: deanSignLink,
            status: status,
        });

        return res.status(200).json("Updated..");
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

module.exports = router;