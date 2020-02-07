const express = require('express');

const ProjectRouter = require('./Projects/projectRouter');
const resourcesRouter= require('./Resources/resourceRouter');
const taskRouter = require('./Tasks/taskRouter');

const server = express();

server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/resource', resourcesRouter)
server.use('/api/tasks', taskRouter)

module.exports = server