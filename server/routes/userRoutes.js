// REQUIREMENTS
const express = require('express');
const jwt = require('jsonwebtoken');

// SECRET DATA
const secretKey = process.env.JWT_SECRET

// EXPRESS ROUTER
const router = express.Router();

// in-memory users database for testing
const users = [
	{
		userId: 1,
		username: 'bettycrocker',
		password: 'cake',
	},
];


// base route: /users


// GET req for registration page
router.get('/register', (req, res) => {
	res.send('Login page');
});

// GET req for login page
router.get('/login', (req, res) => {
	res.send('Login page');
});

// create post handler to handle authentication
router.post('/login', (req, res) => {
	// extract username and password from request body
	const { username, password } = req.body; //assumes req.body will contain username and password
	// find user in users array whose credentials match what is sent in the request
	const user = users.find(
		(u) => u.username === username && u.password === password
	);
	// if user is found, create a JWT token
	if (user) {
		// jwt.sign creates a new JWT with the specified payload and secret key
		const token = jwt.sign(
			{ userId: user.id }, // payload: conatains user info, eg. user id
			secretKey, // the secret key used for signing the token
			{ expiresIn: '15m' } // sets the token expiration time to 1 hr
		);

		// seend the created token back in the response
		res.json({ token });
	} else {
		// no user found, send back 401 unauth response
		res.status(401).send('Authentication Failed');
	}
});


// export the router to be used in the main file
 module.exports = router;