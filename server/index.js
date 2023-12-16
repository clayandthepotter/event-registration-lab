// -------------------------------------------
// REQUIREMENTS
// -------------------------------------------
// require express
const express = require('express');
// require cors
const cors = require('cors');
// require JWT
const jwt = require('jsonwebtoken');
// require routes
const eventsRoutes = require('./routes/eventsRoutes');
const userRoutes = require('./routes/userRoutes');


// -------------------------------------------
// MIDDLEWARE
// -------------------------------------------
// require/import middleware
const authMiddleware = require('./middleware/authMiddleware');
const reqLogMiddleware = require('./middleware/reqLogMiddleware');


// -------------------------------------------
// CREATE APP
// -------------------------------------------
// create app from express
const app = express();


// -------------------------------------------
// CORS
// -------------------------------------------
// enable cors
app.use(cors());


// -------------------------------------------
// JSON Parsing
// -------------------------------------------
// create expression to parse json
app.use(express.json());


// -------------------------------------------
// ROUTES
// -------------------------------------------
// create unprotected /users/login route  
app.use('/users/login', eventsRoutes);
// create unprotected /users/register route  
app.use('/users/register', eventsRoutes);
// create unprotected /events route  
app.use('/events', eventsRoutes);
// create protected /events/register route
app.use('/events/register', authMiddleware, eventsRoutes);
// create protected /events/add-event route
app.use('/events/add-event', authMiddleware, eventsRoutes);


// -------------------------------------------
// PORT
// -------------------------------------------
// define PORT
const PORT = 3001;
// listen to PORT
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
