const express = require('express');
const helmet = require('helmet');
const projectRoutes = require('../routes/projectRoutes.js');

module.exports = server =>{
    server.use(express.json());
    server.use(helmet());
    server.use('/api/projects', projectRoutes);
}