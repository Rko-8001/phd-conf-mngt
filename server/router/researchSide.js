const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');

const searchDriveFolder = require('../driveUploadFunctions/searchFolder');
const uploadImageDrive = require('../driveUploadFunctions/uploadImage');
const createPublicUrl = require('../driveUploadFunctions/createPublicUrl');

// credentials import
require('dotenv').config();

// Approve or Disapprove Logic
router.post('/researchApproveOrDisapprove', async (req, res) => {
    var { id, status, image, grantEligibility, remarksResearch } = req.body;
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

        if (appData.status !== "2")
            return res.status(422).json("Can't Approve Or Disapprove..");


        const applicationFolderName = appData.conferenceStarts + "-" + appData.conferenceEnds + "__" + appData.nameOfConference;
        const applicationFolderId = await searchDriveFolder(applicationFolderName);
        const researchSignId = await uploadImageDrive(image, applicationFolderId, userEmail, "researchSign.jpg");

        if (researchSignId === null) {
            conso
            return res.status(422).json("Error Occurred..");
        }

        const researchSignLink = await createPublicUrl(researchSignId);
        // console.log(researchSignLink);
        await AppData.findByIdAndUpdate(id, {
            status: status,
            grantEligibility: grantEligibility,
            remarksResearch: remarksResearch,
            researchSignLink: researchSignLink,
            lastModified: userEmail,
        });
        return res.status(200).json("Updated..");
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
})

// viewing users - student/ faculty
router.get("/viewUsers", async (req, res) => {

    try {
        var role;
        role = "0"; const studentUser = await User.find({ role: role });
        role = "1"; const facultyUser = await User.find({ role: role });

        return res.status(200).json({ studentUser: studentUser, facultyUser: facultyUser });

    } catch (error) {
        console.log(error);
    }
})

// adding student
router.post("/addStudent", async (req, res) => {
    const data = req.body;
    const updates = [];
    for (const student of data) {
        var name = student.name;
        var email = student.email;
        var entryNo = student.entryNo;
        var department = student.department;
        var dateOfJoining = student.dateOfJoining;
        var fellowshipCategory = student.fellowshipCategory;
        var areaOfSpecialisation = student.areaOfSpecialisation;
        var nameOfSupervisor = student.nameOfSupervisor;
        var emailOfSuperVisor = student.emailOfSuperVisor;
        var mobileNo = student.mobileNo;
        var role = "0";
        var mssg = "";
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                // await User.findOneAndDelete({email:email});
                mssg = "Already Exist..";
            }
            else {
                const newUser = new User({
                    name, email, entryNo, dateOfJoining,
                    department, fellowshipCategory, areaOfSpecialisation,
                    nameOfSupervisor, emailOfSuperVisor, role, mobileNo
                });
                const parentId = await searchDriveFolder(department);
                // console.log(parentId);

                var folderCreatedOrNot = 0;
                while (folderCreatedOrNot <= 10) {
                    const res = await createDriveFolder(entryNo, parentId);
                    if (res)
                        break;
                    else
                        folderCreatedOrNot++;
                }
                if (folderCreatedOrNot > 10) {
                    mssg = "Error Occured creating Drive Folder..";
                }
                else {
                    await newUser.save();
                    mssg = "user added.";
                }

            }
        } catch (error) {
            mssg = "Error Occured while Adding";
            console.log(error);
        }
        updates.push({
            "name": name,
            "email": email,
            "department": department,
            "entryNo": entryNo,
            "remarks": mssg,
        })
    }
    return res.status(200).json({ update: updates });
})

// adding faculty
router.post("/addFaculty", async (req, res) => {
    const data = req.body;
    const updates = [];
    for (const faculty of data) {
        var name = faculty.name;
        var email = faculty.email;
        var department = faculty.department;
        var role = "1";
        var mssg = "";
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                mssg = "Already Exist..";
            }
            else {
                const newUser = new User({
                    name, email,
                    department, role
                });
                await newUser.save();
                mssg = "user added.";


            }
        } catch (error) {
            mssg = "Error Occured while Adding";
            console.log(error);
        }
        updates.push({
            "name": name,
            "email": email,
            "remarks": mssg,
        })
    }
    return res.status(200).json({ update: updates });
})



module.exports = router;