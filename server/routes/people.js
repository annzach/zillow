const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.route('/')
      .get((req,res) =>{
         Person.find({},(err,people)=>{
          res.status(err?400:200).send(err || people);
         })
      })
      .post((req,res) =>{
         Person.create(req.body,(err,person)=>{
          res.status(err?400:200).send(err || person);
         })
      });

router.route('/:id')
       .get((req,res) =>{
  Person.findById(req.params.id, (err,person)=>{
    if(err||!person)
      return res.status(400).send(err||'Person not found')
    res.send(person);
     
   })
})
     .delete((req,res)=>{
       Person.findByIdAndRemove(req.params.id,(err,person)=>{
        if(err || !person) 
          res.status(400).send(err||'Person not found');
        else
          res.send(person.name+'is now deleted');
        
       })

     })

router.put('/:id',(req,res)=>{
 Person.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, todo) => {
      if(err) {
        return res.status(400).send(err);
      }

      Person.findById(req.params.id, (err, person) => {
        res.status(err ? 400 : 200).send(err || person);
      });
    });
  })

module.exports = router;