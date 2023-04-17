// express imported
const express = require('express');
const app = express();

// credentials import
require('dotenv').config();

// connection established
require('./mongoDb/connection');


// requiring user Schema 
const User = require('./model/userSchema');

const PORT = process.env.PORT || 5000

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



app.get('/login', (req, res) => {
    res.send(`Hi`);
})

app.listen(PORT, () => {
    console.log('server is running at ' + PORT)
})
