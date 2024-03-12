const mongoose = require('mongoose');

const applicationSettlementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    applicationId: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    societyName: {
        type: String,
        require: true
    },
    daClaim: {
        type: Boolean,
        require: true
    },
    noDaClaimStarts: {
        type: String,
        require: true
    },
    noDaClaimEnds: {
        type: String,
        require: true
    },
    additionalInfo: {
        type: String,
        require: true
    },
    settlementFileId: {
        type: String,
    },