// import mongoose
const mongoose = require('mongoose');

// applicationData Schema
const applicationData = new mongoose.Schema({
    
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
        /*
            Status
            0 for Submit Application
            1 for Supervisor Approval
            2 for Research Section Approval
            3 for Account Section
            
         */
    },
    mobileNo: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        require: true
    },
    nameOfConference: {
        type: String,
        require: true
    },
    venueOfConference: {
        type: String,
        require: true
    },
    periodOfConference: {
        type: String,
        require: true
    },
    paperInConference: {
        type: String,
        // require: true
    },
    financialSupport: {
        type: Boolean,
        // require: true
    },
    advance: {
        type: Boolean,
        // require: true
    },  
    coaa: {
        type: Boolean,
    },
    cocba: {
        type: Boolean,
    },
    coaba: {
        type: Boolean,
    }
});


const AppData = mongoose.model('APPDATA', applicationData);

module.exports = AppData;




/* 

            Mongo Insertion
{
    "email": "2020csb1143@iitrpr.ac.in",
    "status": "0",
    "mobileNo": "1234567890", 
    "bankAccountNo": "12345678901",
    "nameOfConference": "DEP", 
    "venueOfConference": "iitropar", 
    "periodOfConference": "12-11-2023",
    "paperInConference": "Defense Seminar",
    "financialSupport": true, 
    "advance": true,
    "coaa": true, 
    "coaba": true,
    "cocba": true
}


*/