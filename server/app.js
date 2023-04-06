// express imported
const express = require('express');
const app = express();

// credentials import
require('dotenv').config();

// connection established
require('./mongoDb/connection');


// requiring user Schema 
const User = require('./model/userSchema');


// components Maintained
app.use(express.json());
app.use(require('./router/loginAuth'));
app.use(require('./router/studentSide'));
app.use(require('./router/googleAuth'));
app.use(require('./router/researchSide'));
app.use(require('./router/researchSide'));
app.use(require('./router/facultySide'));
app.use(require('./router/sharedFunctions'));
app.use(require('./router/accountSide.js'))



app.get('/login', (req,res) => {
    res.send(`Hi`);
})

app.listen(process.env.NODE_PORT, () =>{
    console.log('server is running at ' + process.env.NODE_PORT)
})
