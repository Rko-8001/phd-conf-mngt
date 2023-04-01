const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

// const protect = async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1]

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET)

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select('-password')

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401)
//     }
//   }

//   if (!token) {
//     res.status(401)
//   }
// }
// module.exports = { protect }

async function verifyStudentToken(req, res, next) {

  var bearerToken;

  const bearerHeader = await req.headers["authorization"];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    bearerToken = bearerHeader.split(" ")[1];

    // verfiy the token
    const decode = jwt.verify(bearerToken, process.env.JWT_SECRET)

    // debug purpose
    // console.log(decode);


    // set up the req.body
    req.body.email = decode.email;

    // check whether it is student or not
    if (decode.role !== "0") {
      res.sendStatus(422).json({ error: "Not a Student" })
    }
    next();

  } else {
    res.sendStatus(403).json("Error MW...")
  }

  if (!bearerToken) {
        res.sendStatus(401).json({error: "empty token"})
      }

}

module.exports = { verifyStudentToken }