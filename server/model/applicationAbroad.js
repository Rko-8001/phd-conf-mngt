// import mongoose
const mongoose = require('mongoose');

// applicationData Schema
const applicationDataAbroad = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        default: 1
    },
    status: {
        type: String,
        required: true
    },


    mobileNo: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        require: true
    },
    ifscCode: {
        type: String,
        require: true
    },

    nameOfConference: {
        type: String,
    },
    venueOfConference: {
        type: String,
    },
    nameOfSociety: {
        type: String,
    },
    societyRecognized: {
        type: String,
    },
    reasonToAttend: {
        type: String,
    },
    paperInConference: {
        type: String,
    },
    fundingSources: {
        type: String,
    },
    purposeOfVisit: {
        type: String,
    },
    justification: {
        type: String,
    },
    sponsorship: {
        type: String,
    },
    financialSupport: {
        type: String,
    },
    advances: {
        type: Boolean,
    },
    conferenceStarts: {
        type: String,
    },
    conferenceEnds: {
        type: String,
    },
    studentLeaveStarts: {
        type: String,
    },
    studentLeaveEnds: {
        type: String,
    },
    finances: {
        type: Array,
    },
    flightDetails: {
        type: Array,
    },


    invitationLetterAdditionalFileId: {
        type: String,
    },
    letterOfInvitationFileId: {
        type: String,
    },
    conferenceBrochureFileId: {
        type: String,
    },
    copyOfAbstractFileId: {
        type: String,
    },
    accomodationCostFileId: {
        type: String,
    },
    acceptanceOfPaperFileId: {
        type: String,
    },


    facultySignLink: {
        type: String,
    },


    hodSignLink: {
        type: String,
    },


    grantEligibility: {
        type: String
    },
    remarksResearch: {
        type: String
    },
    researchSignLink: {
        type: String
    },


    balanceAvailable: {
        type: String
    },
    grantUtilized: {
        type: String
    },
    passedForPayment: {
        type: String
    },
    remarksAccounts: {
        type: String
    },
    accountSignLink: {
        type: String
    },


    deanSignLink: {
        type: String
    },


    lastModified: {
        type: String,
    },
    image: {
        type: String,
    }
},
    {
        timestamps: true
    });


const AppDataAbroad = mongoose.model('APPDATAABROAD', applicationDataAbroad, 'appdatas');

module.exports = AppDataAbroad;

