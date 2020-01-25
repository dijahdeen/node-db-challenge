const express = require('express')

const Tasks = require('./taskModel.js')

const router = express.Router()




router.get('/', (req, res) => {
    Tasks.find()
    .then(Tasks => {
      res.json(Tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
  
  
  router.post('/:id/tasks', (req, res) => {
    const stepTasks = req.body;
    const { id } = req.params; 
  
    Tasks.findById(id)
    .then(scheme => {
      if (scheme) {
        Tasks.addTasks(stepTasks, id)
        .then(step => {
          res.status(201).json(step);
        })
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new step' });
    });
  });
  
  
  module.exports = router;