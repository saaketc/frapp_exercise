const express = require('express');
const expressApp = express();
const http = require('http');
const server = http.createServer(expressApp);

const port = process.env.PORT || 5000;

//middleware routes
const crossDomain = require('./middleware/crossDomain');
// API routes
const taskRoute = require('./routes/taskRoute');

// for avoiding CORS
expressApp.use(crossDomain);

// middleware to convert request body into json, pack into req.body
expressApp.use(express.json());

expressApp.use('/api/task', taskRoute);

server.listen(port, () => console.log(`Listening to port ${port}`));
