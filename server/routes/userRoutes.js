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