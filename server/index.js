

// REQUIREMENTS ----------------------------------------------------

// require express
const express = require('express');
// require cors
const cors = require('cors');
// require JWT
const jwt = require('jsonwebtoken');




// CREATE APP ----------------------------------------------------
// create app from express
const app = express();
// create expression to parse json
app.use(express.json());




// MIDDLEWARE ----------------------------------------------------
// require/import middleware
const authMiddleware = require('./middleware/authMiddleware');



// TEST DATA ----------------------------------------------------
// in-memory events database for testing
const events = [
	{
		id: 1,
		name: 'Tech Conference 2023',
		description:
			'An annual conference for tech enthusiasts, featuring talks from industry leaders, workshops, and networking opportunities.',
		date: '2023-07-15',
		location: 'Convention Center, Silicon Valley',
		attendees: [1], // contains user IDs
	},
];


