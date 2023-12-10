// require JWT
const jwt = require('jsonwebtoken');

// load and store JWT secret ket
const secretKey = process.env.JWT_SECRET

// impliment middleware for JWT authentication
const authMiddleware = (req, res, next) => {
  // extract token from req.headers
  const token = req.headers['authorization'];
  // if token is present,
  if (token) {
    // verify the token with "verify" method which checks if token is valid and not expired
    jwt.verify(token, secretKey, (err, decoded) => {
      // if the token is invalid or fails, return a 403 unauthorized status
      if (err) {
        return res.status(403).send(err, "Unauthorized")
      }
      // if the token is valid, the 'decoded' parameter conatains the payload of the token
      // attach the decoded payload (user info) to the request object
      // this allows for subsequent middleware or route handlers to also have access to tthe payload data (user info)
      req.user = decoded;
      // call the next() function in the middleware/route handler chain
      // this passes control to the next middleware or route handler
      next();
    })
  } else {
    // if no token is provided in the headers, send a 403 "Unauthorized" response
    // this blocks the request from proceeding further if no token is provided
    res.status(403).send("Unauthorized");
  };
};

// export module(s)
module.exports = authMiddleware;

// if the token is valid, the 'decoded' parameter conatains the payload of the token
// attach the decoded payload (user info) to the request object
// this allows for subsequent middleware or route handlers to also