const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');
const AppDataSett = require('../model/applicationSettlement');

// credentials import
require('dotenv').config();

const createPublicUrl = require('../driveUploadFunctions/createPublicUrl');
const AppDataAbroad = require('../model/applicationAbroad');

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
        const dataSettlement = await AppDataSett.findById(id);
        let Email = null;
        if (dataSettlement?._doc?.email != null)
        {
            Email = dataSettlement?._doc?.email;
        }
        else if (data?._doc?.email != null)
        {
            Email = data?._doc?.email;
        }
        else {
            const parentId = dataSettlement._doc.parentId;
            const dataAbroad = await AppDataAbroad.findById(parentId);
            const dataIndia = await AppData.findById(parentId);

            let data = {};
            if (dataIndia != null) {
                data = dataIndia;
            }
            else {
                data = dataAbroad;
            }

            Email = data.email;

        }
        console.log(Email, data?._doc?.email, dataSettlement?._doc?.email);
        console.log(data);
        console.log(dataSettlement);
        const user = await User.findOne({ email: Email });
        console.log("USER");
        console.log(user);
        if (data?.email != null) {
            if (data.type === 1) {
                console.log("Id Bitch: ", id);
                const dataAbroad = await AppDataAbroad.findById(id);

                console.log("Data Bitch: ", dataAbroad);

                const invitationLetterAdditonalUrl = await createPublicUrl(dataAbroad.invitationLetterAdditionalFileId);
                const letterOfInvitationUrl = await createPublicUrl(dataAbroad.letterOfInvitationFileId);
                const conferenceBrochureUrl = await createPublicUrl(dataAbroad.conferenceBrochureFileId);
                const copyOfAbstractUrl = await createPublicUrl(dataAbroad.copyOfAbstractFileId);
                const accomodationCostUrl = await createPublicUrl(dataAbroad.accomodationCostFileId);
                const acceptanceOfPaperUrl = await createPublicUrl(dataAbroad.acceptanceOfPaperFileId)

                console.log("SexyBitch143: ", invitationLetterAdditonalUrl, dataAbroad.invitationLetterAdditionalFileId);

                return res.status(200).json(
                    {
                        data: dataAbroad,
                        applicantInfo: user,
                        invitationAdditonalUrl: invitationLetterAdditonalUrl,
                        invitationUrl: letterOfInvitationUrl,
                        abstractUrl: copyOfAbstractUrl,
                        acceptanceUrl: acceptanceOfPaperUrl,
                        conferenceBrochureUrl: conferenceBrochureUrl,
                        accmodationUrl: accomodationCostUrl
                    });
            }
            else {
                const copyofAbstractUrl = await createPublicUrl(data.abstractFileId);
                const copyOfAcceptanceUrl = await createPublicUrl(data.acceptanceFileId);
                const copyOfConferenceBrochureUrl = await createPublicUrl(data.brochureFileId);

                return res.status(200).json({ data: data, applicantInfo: user, abstractUrl: copyofAbstractUrl, acceptanceUrl: copyOfAcceptanceUrl, conferenceBrochureUrl: copyOfConferenceBrochureUrl });
            }
        }
        else {
            console.log("UO");
            console.log(dataSettlement);

            const parentId = dataSettlement._doc.parentId;

            console.log(parentId);

            // console.log("Id Bitch: ", id);
            const dataAbroad = await AppDataAbroad.findById(parentId);
            const dataIndia = await AppData.findById(parentId);

            let data = {};
            if (dataIndia != null) {
                data = dataIndia;
            }
            else {
                data = dataAbroad;
            }

            data.type = 3;
            
            console.log("DATA");
            console.log(data);

            const combinedData = {
                ...data._doc,
                ...dataSettlement._doc
            }



            // const data = await 

            // console.log("Data Bitch: ", dataAbroad);

            // const invitationLetterAdditonalUrl = await createPublicUrl(data._doc.invitationLetterAdditionalFileId);
            // const letterOfInvitationUrl = await createPublicUrl(data._doc.letterOfInvitationFileId);
            // const conferenceBrochureUrl = await createPublicUrl(data._doc.conferenceBrochureFileId);
            // const copyOfAbstractUrl = await createPublicUrl(data._doc.copyOfAbstractFileId);
            // const accomodationCostUrl = await createPublicUrl(data._doc.accomodationCostFileId);
            // const acceptanceOfPaperUrl = await createPublicUrl(data._doc.acceptanceOfPaperFileId)

            // console.log("SexyBitch143: ", invitationLetterAdditonalUrl, dataAbroad.invitationLetterAdditionalFileId);

            return res.status(200).json(
                {
                    data: combinedData,
                    applicantInfo: user,
                    // invitationAdditonalUrl: invitationLetterAdditonalUrl,
                    // invitationUrl: letterOfInvitationUrl,
                    // abstractUrl: copyOfAbstractUrl,
                    // acceptanceUrl: acceptanceOfPaperUrl,
                    // conferenceBrochureUrl: conferenceBrochureUrl,
                    // accmodationUrl: accomodationCostUrl
                });
        }

    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });

    }
})






module.exports = router;