
// REQUIREMENTS ----------------------------------------------
const express = require('express');

// ROUTER -----------------------------------------------------
// initialize express router
const router = express.Router();

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

// HANDLERS --------------------------------------------------------
// create a get handler to the path /events that sends back the events
router.get('/', (req, res) => {
	// send back the events in json format
	res.json(events);
	console.log(`GET /events`);
})

// create a post handler that is used for creating new events
