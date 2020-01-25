const express = require('express')

const Resources = require('./resourcesModel.js')

const router = express.Router()




router.get('/', (req, res) => {
    Resources.find()
    .then(Resources => {
      res.json(Resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Resources' });
    });
  });
  
  
  router.post('/:id/tasks', (req, res) => {
    const Res = req.body;
    const { id } = req.params; 
  
    Resources.findById(id)
    .then(scheme => {
      if (scheme) {
        Resources.addRes(Res, id)
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