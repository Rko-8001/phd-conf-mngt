const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema 
const User = require('../model/userSchema');

router.post('/studentInfoLoading', async (req, res) => {
    const {email, role} = req.body;
    try {
        const student = await User.findOne({email: email})
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});





module.exports = router;

