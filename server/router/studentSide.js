const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema 
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');

router.post('/studentInfoLoading', async (req, res) => {
    const { email, role } = req.body;
    try {
        const student = await User.findOne({ email: email })
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});


// submitting application 
// Statuses
router.post('/studentApplicationSubmit', async (req, res) => {
    const { email,status,  mobileNo, bankAccountNo, nameOfConference, venueOfConference, periodOfConference, paperInConference, financialSupport, advance, coaa, coaba, cocba } = req.body;
    // console.log(email + " " + financialSupport + " " + coaa);
    // console.log(mobileNo + " " + bankAccountNo);
    // console.log(nameOfConference + " " + venueOfConference + " " + periodOfConference + " " + paperInConference);
    try {
        const data = new AppData({email,status, mobileNo, bankAccountNo, nameOfConference, venueOfConference, periodOfConference, paperInConference, financialSupport, advance, coaa, coaba, cocba});
        await data.save();

        return res.status(200).json({message: "Application Submitted.."});
    } catch (error) {
        console.log(error);
        return res.status(422).json({message: "Can't submit application. Try Again.."})
    }

});



module.exports = router;

