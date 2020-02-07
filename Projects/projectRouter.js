const express = require('express')

const Projects = require('./projectModel.js')

const router = express.Router()




router.get('/', (req, res) => {
    Projects.find()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Projects' });
    });
  });
  
  
  router.post('/:id/projects', (req, res) => {
    const stepData = req.body;
    const { id } = req.params; 
  
    Projects.findById(id)
    .then(scheme => {
      if (scheme) {
        Projects.addStep(stepData, id)
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
