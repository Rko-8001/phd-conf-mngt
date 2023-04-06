const jwt = require('jsonwebtoken')

// credentials import
require('dotenv').config();


async function genUserToken(email, role) {
  // return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '30d' });
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ email, role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    resolve(token);
  });
}

async function genAppToken( id) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    resolve(token);
  });
}
module.exports = { genUserToken, genAppToken }