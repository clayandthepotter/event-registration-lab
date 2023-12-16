
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
// create a GET handler to the path /events that returns available events
router.get('/', (req, res) => {
	// send back the events in json format
	res.json(events);
	console.log(`GET /events`);
})

// create a POST handler that is used for adding new events
router.post('/add-event', (req, res) => {
	// create new event object from the request and store in variable newEvent
	// be sure to add and id
	const newEvent = { id: Date.now(), ...req.body };
	// add newEvent to the events array
	events.push(newEvent);
	console.log(`POST /events/add-event`);
	// send back a 201 status code along with newTodo in json format
	res.status(201).json(newEvent);
})


// create a POST handler that is used for registering for events
router.post('/register', (req, res) => {
	// create new event object from the request and store in variable newEvent
	// be sure to add and id
	const newEvent = { id: Date.now(), ...req.body };
	// add newEvent to the events array
	events.push(newEvent);
	console.log(`POST /events/add-event`);
	// send back a 201 status code along with newTodo in json format
	res.status(201).json(newEvent);
});


// export the router to be used in the main file
 module.exports = router;