const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema 
const User = require('../model/userSchema');

router.get('/studentInfo', async (req, res) => {
    try {
        const users = await User.find();
        // console.log(user.type);
        const user = users.map(user => {
            if (user.role == "0") {
                return {
                    name: user.name,
                    email: user.email,
                    entryNo: user.entryNo,
                    department: user.department,
                    dateOfJoining: user.dateOfJoining,
                    fellowshipCategory: user.fellowshipCategory,
                    areaOfSpecialisation: user.areaOfSpecialisation,
                    nameOfSupervisor: user.nameOfSupervisor
                }
            }
        });
        var student = user.filter( function (el){
            return el != null;
        })
        return res.status(200).json(student[0]);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});





module.exports = router;

