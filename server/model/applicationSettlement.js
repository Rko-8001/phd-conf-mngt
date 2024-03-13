// const mobileNo = generalInfo.mobile;
    //     const empCode = generalInfo.empCode;
    //     const department = generalInfo.department;
    //     const designation = generalInfo.designation;
    //     const Bpay = generalInfo.Bpay;
    //     const budgetHead = generalInfo.budgetHead;
    //     const advanceDrawn = generalInfo.advanceDrawn;
    //     const Date = dayjs(generalInfo.date).format('DD/MM/YYYY');
    //     const bankAccNo = generalInfo.bankAccNo;

    //     const status = "0";

    //     const finances = [...tableData];
    //     const travels = [...tableDataTravel];

// import mongoose
const mongoose = require('mongoose');

// applicationData Schema
const applicationData = new mongoose.Schema({

    mobileNo: {
        type: String,
        required: true
    },
    empCode: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    Bpay: {
        type: String,
        required: true
    },
    budgetHead: {
        type: String,
        required: true
    },
    advanceDrawn: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    bankAccNo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    finances: {
        type: Array,
        required: true
    },
    travels: {
        type: Array,
        required: true
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


const AppDataSett = mongoose.model('APPDATASETT', applicationData, 'appdatasett');

module.exports = AppDataSett;