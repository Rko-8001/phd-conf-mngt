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

const searchDriveFolder = require('../driveUploadFunctions/searchFolder');
const uploadImageDrive = require('../driveUploadFunctions/uploadImage');
const createPublicUrl = require('../driveUploadFunctions/createPublicUrl');

router.post("/researchApprovedApps", async (req, res) => {

    try {
        const status = "2";
        const appData = await AppData.find({ status: status });
        return res.status(200).json(appData);
    } catch (error) {
        console.log(error)
        return res.status(422);
    }
});

router.post('/accountApproveOrDisapprove', async (req, res) => {
    const {
        id, status, image,
        balanceAvailable, grantUtilized, passedForPayment,
        remarksAccount } = req.body;



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

        if (appData.status !== "3")
            return res.status(422).json("Can't Approve Or Disapprove..");


        const applicationFolderName = appData.conferenceStarts + "-" + appData.conferenceEnds + "__" + appData.nameOfConference;
        const applicationFolderId = await searchDriveFolder(applicationFolderName);
        const accountSignId = await uploadImageDrive(image, applicationFolderId, userEmail, "accountSign.jpg");

        if (accountSignId === null) {
            return res.status(422).json("Error Occurred..");
        }

        const accountSignLink = await createPublicUrl(accountSignId);
        // console.log(accountSignLink);
        const user = await User.findOne({ email: appData.email });
        user.balance = balanceAvailable - passedForPayment;
        user.unsettledBalance = user.unsettledBalance + passedForPayment;
        console.log(user.balance);
        console.log(user.unsettledBalance);
        await user.save();

        await AppData.findByIdAndUpdate(id, {
            status: status,
            balanceAvailable: balanceAvailable,
            grantUtilized: grantUtilized,
            passedForPayment: passedForPayment,
            remarksAccounts: remarksAccount,
            accountSignLink: accountSignLink,
            lastModified: userEmail,
        });
        return res.status(200).json("Updated..");
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
});
module.exports = router;