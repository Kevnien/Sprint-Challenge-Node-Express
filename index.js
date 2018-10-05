const express = require('express');
const server = express();

const configureMiddleware = require('./config/middleware.js');

// Middlewares
configureMiddleware(server);

// Endpoints

// Listen on port
const port = 8000;
server.listen(port, ()=>{
    console.log(`API on http://localhost:${port}`);
})