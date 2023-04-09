const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');



// Approve or Disapprove Logic
router.post('/researchApproveOrDisapprove', async (req, res) => {
    // const {id, status, remarks} = req.body;
    const { id, status } = req.body;

    // Debug Purpose
    // console.log(id);    console.log(status);

    try {

        const appData = await AppData.findById(id);

        if (appData.status !== "1") {
            return res.status(422).json("Can't Approve Or Disapprove..");
        }

        // await AppData.findByIdAndUpdate(id, {status: status, remarksResearch: remarks});
        await AppData.findByIdAndUpdate(id, { status: status });

        //             Debug Purpose
        // const appData2 = await AppData.findById(id);
        // console.log(appData2.status);

        return res.status(200).json("updated");
    } catch (error) {
        console.log(error);
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
        var role = "0";
        var mssg = "";
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                mssg = "Already Exist..";
            }
            else {
                const newUser = new User({
                    name, email, entryNo, dateOfJoining,
                    department, fellowshipCategory, areaOfSpecialisation,
                    nameOfSupervisor, emailOfSuperVisor, role
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
    return res.status(200).json({update: updates});
})



module.exports = router;