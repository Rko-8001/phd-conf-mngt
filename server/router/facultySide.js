const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');
const AppDataSett = require('../model/applicationSettlement');

// credentials import
require('dotenv').config();

const searchDriveFolder = require('../driveUploadFunctions/searchFolder');
const uploadImageDrive = require('../driveUploadFunctions/uploadImage');
const createPublicUrl = require('../driveUploadFunctions/createPublicUrl');
const AppDataAbroad = require('../model/applicationAbroad');

const ObjectId = require('mongodb').ObjectId;

router.post('/facultyInfoLoading', async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        const student = await User.findOne({ email: email })
        // if(student.role !== 1)
        return res.status(200).json(student);

    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});

router.post('/fetchingNewApplicationFaculty', async (req, res) => {

    const { email } = req.body;
    try {
        const status = "0";
        const appData = await AppData.find({ status: status });

        var filteredData = new Array();

        // const l = appData.length;
        // console.log(l);
        for (let i = 0; i < appData.length; i++) {
            const semail = appData[i].email;
            const user = await User.findOne({ email: semail });
            // console.log(user);
            if (user.nameOfSupervisor === email) {
                // console.log(data);
                filteredData.push(appData[i]);
            }
        }
        // console.log(filteredData);
        // Debug Purpose
        // console.log(appData);
        // console.log(typeof(appData));        // Object
        // appData.forEach( (data) => {
        //     console.log(data._id + "\t" + data.nameOfConference);
        // })

        return res.status(200).json(filteredData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

router.post('/approvedFacultyApplication', async (req, res) => {
    const { email } = req.body;
    try {
        const appData = await AppData.find();

        var filteredData = new Array();
        // console.log(appData);
        for (let i = 0; i < appData.length; i++) {
            const semail = appData[i].email;
            const user = await User.findOne({ email: semail });
            // console.log(user);
            if (user.nameOfSupervisor === email && appData[i].status !== "-1" && appData[i].status !== "0") {
                filteredData.push(appData[i]);
            }
        }
        return res.status(200).json(filteredData);
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});

router.post('/studentInfoFaculty', async (req, res) => {
    const { semail, femail } = req.body;

    try {
        const user = await User.findOne({ email: semail });
        if (user.nameOfSupervisor === femail) {
            const appData = await AppData.find({ email: semail });
            return res.status(200).json(appData);
        }
        else {
            return res.status(421).json("not under your supervision..")
        }
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
    }
});


// Approve or Disapprove Logic
router.post('/facultyApproveOrDisapprove', async (req, res) => {
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

        if (appData.status !== "0")
            return res.status(422).json("Can't Approve Or Disapprove..");


        const applicationFolderName = appData.conferenceStarts + "-" + appData.conferenceEnds + "__" + appData.nameOfConference;
        const applicationFolderId = await searchDriveFolder(applicationFolderName);
        const facultySignId = await uploadImageDrive(image, applicationFolderId, userEmail, "facultySign.jpg");

        if (facultySignId === null) {
            return res.status(422).json("Error Occurred..");
        }

        const facultySignLink = await createPublicUrl(facultySignId);
        console.log(facultySignLink);
        await AppData.findByIdAndUpdate(id, {
            lastModified: userEmail,
            facultySignLink: facultySignLink,
            status: status,
        });

        return res.status(200).json("Updated..");
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

// viewing application for supervisor of students under him.
router.post('/viewFacultyApplications', async (req, res) => {

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
        console.log("Token: " + bearerToken);
        var decode = jwt.verify(bearerToken, process.env.JWT_SECRET)

        // //setting email and role from decode
        const facultyEmail = decode.email;
        console.log(facultyEmail);
        const appData = await AppData.find().sort({ "updatedAt": -1 });

        var filteredData = new Array();
        const user = await User.find();
        for (let i = 0; i < user.length; i++) {
            if (user[i].role === "0") {
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


router.post('/viewFacultyApplicationsSettlement', async (req, res) => {

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
        console.log("Token: " + bearerToken);
        var decode = jwt.verify(bearerToken, process.env.JWT_SECRET)

        // //setting email and role from decode
        const facultyEmail = decode.email;
        console.log(facultyEmail);

        const settData = await AppDataSett.find().sort({ "updatedAt": -1 });

        var filteredData = new Array();
        const user = await User.find();
        for (let i = 0; i < user.length; i++) {
            if (user[i].role === "0" && facultyEmail === user[i].emailOfSupervisor) {


                const userSettData = await AppDataSett.find({ email: user[i].email });

                for (const element of userSettData) {
                    try {

                        const dataIndia = await AppData.findById(element.parentId);
                        const dataAbroad = await AppDataAbroad.findById(element.parentId);


                        let data = {};
                        if (dataIndia != null) {
                            data = dataIndia;
                        }
                        else {
                            data = dataAbroad;
                        }

                        const modelement = {
                            ...data._doc,
                            ...element._doc,
                        };
                        filteredData.push(modelement);
                    } catch (error) {
                        console.log(error);
                    }
                }



                // const settData = await AppDataSett.find({ email: user[i].email });

                // settData.forEach(async (element, index) => {
                //     console.log(element);
                //     console.log(element._doc.parentId);

                //     try {
                //         const dataIndia = await AppData.findById(element._doc.parentId);
                //         const dataAbroad = await AppDataAbroad.findById(element._doc.parentId);
                //         console.log("PARENT DATA");
                //         // console.log(data);

                //         let data = {};
                //         if (dataIndia != null) {
                //             data = dataIndia;
                //         }
                //         else {
                //             data = dataAbroad;
                //         }

                //         const modelement = {
                //             ...data._doc,
                //             ...element._doc,
                //         }

                //         console.log(modelement);

                //         filteredData.push(modelement);

                //         // filteredData.push(element);
                //         // console.log(filteredData);

                //         if (index === settData.length - 1) {
                //             // This is the last iteration
                //             // Call your function here
                //             // console.log("Filtered Data");
                //             // console.log(filteredData);

                //             return res.status(200).json({ data: filteredData });
                //         }
                //     } catch (error) {
                //         console.log(error);
                //     }
                // });
            }
        }
        // console.log(filteredData);
        // return res.status(200).json({ data: filteredData });
        return res.status(200).json({ data: filteredData });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

module.exports = router;