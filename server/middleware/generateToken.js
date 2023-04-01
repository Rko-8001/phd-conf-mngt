const jwt = require('jsonwebtoken')

// credentials import
require('dotenv').config();

            
async function genUserToken(username, role) {
    // return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '30d' });
    return new Promise((resolve, reject) => {
        const token = jwt.sign({ username, role}, process.env.JWT_SECRET, { expiresIn: "1d" });
        resolve(token);
      });
  }

module.exports = { genUserToken }