// import mongoose
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    entryNo: {
        type: String,
        // required:true
    },
    department: {
        type: String,
        // required: true
    },
    dateOfJoining: {
        type: String, 
        // required: true
    },
    fellowshipCategory: {
        type: String,
        // required: true,
    },
    areaOfSpecialisation: {
        type: String,
        // required: true
    },
    nameOfSupervisor: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        required: true
        // 0 for student
        // 1 for faculty
        // 2 for admin       
    }
});


const User = mongoose.model('USER', userSchema);

module.exports = User;




//   mongo insertion 
// {"_id":{"$oid":"63eba5a2540a443fd5f34388"},"name":"Yadwinder","email":"2020csb1143@iitrpr.ac.in","entryNo":"2020CSB1143", "department":"CSE", "dateOfJoining": "09/11/2022", "fellowshipCategory": "nirf", "areaOfSpecialisation": "WebDev", "nameOfSupervisor": "Dr. Puneet Goyal"}