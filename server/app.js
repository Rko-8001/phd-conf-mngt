// express imported
const express = require('express');
const app = express();


// connection established
require('./mongoDb/connection');


// requiring user Schema 
const User = require('./model/userSchema');


app.use(express.json());
app.use(require('./router/loginAuth'));
app.use(require('./router/studentSide'));

app.get('/', (req,res) => {
    res.send(`Hi`);
})
app.get('/login', (req,res) => {
    res.send(`Hi`);
})

app.listen(5000, () =>{
    console.log(`server is running at`)
})
