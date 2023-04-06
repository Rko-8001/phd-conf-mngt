const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');

const { verifyStudentToken } = require('../middleware/authMiddleware');

// requiring user Schema 
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');

// router.post('/studentInfoLoading',verifyStudentToken,  async (req, res) => {
router.post('/studentInfoLoading', async (req, res) => {

    const { email, role } = req.body;

    try {
        const student = await User.findOne({ email: email });
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});


// submitting application 
// Statuses
router.post('/studentApplicationSubmit', async (req, res) => {
    const { email, status,
        mobileNo, bankAccountNo,
        nameOfConference, venueOfConference, paperInConference,
        conferenceStarts, conferenceEnds,
        financialSupport,
        advances, finances,
        coaa, coaba, cocba,
        studentLeaveStarts, studentLeaveEnds } = req.body;

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
                studentLeaveStarts, studentLeaveEnds 
            });
        await data.save();

        return res.status(200).json({ message: "Application Submitted.." });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Can't submit application. Try Again.." })
    }

});


// router.post('/studentApplicationView', verifyStudentToken, async(req, res) => {
router.post('/studentApplicationView', async (req, res) => {
    const { email } = req.body;

    try {
        const data = await AppData.find({ email: email });

        return res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
})



module.exports = router;

