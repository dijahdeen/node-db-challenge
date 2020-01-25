const express = require('express');

const ProjectRouter = require('./Projects/projectRouter');
const resourcesRouter= require('./Resources/resourcesRouter');
const taskRouter = require('./tasks/taskRouter');

const server = express();

server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/projects', resourcesRouter)
server.use('/api/projects', taskRouter)

module.exports = server