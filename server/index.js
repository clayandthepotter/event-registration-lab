





// REQUIREMENTS ----------------------------------------------------

// require express
const express = require('express');
// require cors
const cors = require('cors');
// require JWT
const jwt = require('jsonwebtoken');


// MIDDLEWARE ----------------------------------------------------
// require/import middleware
const authMiddleware = require('./middleware/authMiddleware');


// ROUTES ----------------------------------------------------
// require routes
const eventsRoutes = require('./routes/eventsRoutes');
const userRoutes = require('./routes/userRoutes');


// CREATE APP ----------------------------------------------------
// create app from express
const app = express();

// PROTOCOLS ----------------------------------------------
// enable cors
app.use(cors());
// create expression to parse json
app.use(express.json());







