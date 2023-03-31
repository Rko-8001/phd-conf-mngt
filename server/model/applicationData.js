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
            1 for Supervisor Approval           -1 for Supervisor Disapproval
            2 for Research Section Approval     -2 for Research Section Dispproval
            3 for Account Section               -3 for Account Section

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
    finances: {
        type: Array,
    },
    coaa: {
        type: Boolean,
    },
    cocba: {
        type: Boolean,
    },
    coaba: {
        type: Boolean,
    },
    remarksResearch: {
        type: String
    },
    remarksAccounts: {
        type: String
    },
    remarksDean: {
        type: String
    }
});


const AppData = mongoose.model('APPDATA', applicationData);

module.exports = AppData;




/* 

            Mongo Insertion

            Student Submitted
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

        Faculty Approved
{
    ,
    "email": "2020csb1143@iitrpr.ac.in",
    "status": "1",
    "mobileNo":         "1234567890", 
    "bankAccountNo":    "12345678901",
    "nameOfConference":   "fa2", 
    "venueOfConference":  "fa2", 
    "periodOfConference": "fa2",
    "paperInConference":  "fa2",
    "financialSupport": true, 
    "advance": true,
    "coaa": true, 
    "coaba": true,
    "cocba": true
}

        Faculty Disapproved
{
    ,
    "email": "2020csb1143@iitrpr.ac.in",
    "status": "-1",
    "mobileNo":         "1234567890", 
    "bankAccountNo":    "12345678901",
    "nameOfConference":   "fd1", 
    "venueOfConference":  "fd1", 
    "periodOfConference": "fd1",
    "paperInConference":  "fd1",
    "financialSupport": true, 
    "advance": true,
    "coaa": true, 
    "coaba": true,
    "cocba": true
}


*/