const express = require('express');
const router = express.Router();


// connection established
require('../mongoDb/connection');


// requiring user Schema                
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');



// Approve or Disapprove Logic
router.post('/researchApproveOrDisapprove', async (req , res) => {
    // const {id, status, remarks} = req.body;
    const {id, status} = req.body;
    
                // Debug Purpose
    // console.log(id);    console.log(status);
    
    try {
        
        const appData = await AppData.findById(id);
        
        if(appData.status !== "1")
        {
            return res.status(422).json("Can't Approve Or Disapprove..");
        }
        
        // await AppData.findByIdAndUpdate(id, {status: status, remarksResearch: remarks});
        await AppData.findByIdAndUpdate(id, {status: status});
        
        //             Debug Purpose
        // const appData2 = await AppData.findById(id);
        // console.log(appData2.status);

        return res.status(200).json("updated");
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;



