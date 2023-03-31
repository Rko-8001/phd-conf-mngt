const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');
 



router.post("/researchApprovedApps", async (req, res) => {

    try {
        const status = "2";
        const appData = await AppData.find({status: status});
        return res.status(200).json(appData);
    } catch (error) {
        console.log(error)
        return res.status(422);
    }
});

router.post('/accountApproveOrDisapprove', async (req,res) => {
    const {id, status} = req.body;
    
    try {
        const appData = await AppData.findById(id);
        
        if(appData.status !== "2")
        {
            return res.status(422).json("Can't Approve Or Disapprove..");
        }

        await AppData.findByIdAndUpdate(id, {status: status});
        return res.status(200).json("Done")
    } catch (error) {
        console.log(error);
        return res.status(422).json("Error Occurred..");
             
    }
});
module.exports = router;