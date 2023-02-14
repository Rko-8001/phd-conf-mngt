const mongoose = require('mongoose');
const DB = 'mongodb+srv://team12:XS6QBYt51hArMeAC@cluster0.ij5ypw1.mongodb.net/phdmngt?retryWrites=true&w=majority'

mongoose.connect(DB).then( () => {
    console.log("Connection Success..");
}).catch((err) => {
    console.log("Connection Failed..");
});
