// app.js
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example test route
app.get('/', (req, res) => {
  res.send('🚀 Backend API is working!');
});

// Export app for server.js
module.exports = app;