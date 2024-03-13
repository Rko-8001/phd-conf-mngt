const mongoose = require('mongoose');

// credentials import
require('dotenv').config();
const DB = process.env.MONGODB_CONNECTION_KEY

mongoose.connect(DB).then( () => {
    console.log("Connection Success..");
}).catch((err) => {
    console.log("Connection Failed..", err);
});
