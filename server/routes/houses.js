const express = require('express');
const router = express.Router();

const House = require('../models/house');

router.route('/')
      .get((req,res) =>{
         House.find({},(err,houses)=>{
          res.status(err?400:200).send(err || houses);
         }).populate('owner')
      })
      .post((req,res) =>{
         House.create(req.body,(err,house)=>{
          res.status(err?400:200).send(err || house);
         })
      });

router.route('/petWithoutOwner')
      .get((req,res) =>{
         House.find({owner : {$exists : false} },(err,houses)=>{
          res.status(err?400:200).send(err || houses);
         })
      });

router.route('/:id')
       .get((req,res) =>{
  House.findById(req.params.id, (err,house)=>{
    if(err||!house)
      return res.status(400).send(err||'House not found')
    res.send(house);
     
   }).populate('owner')
})
     .delete((req,res)=>{
       House.findByIdAndRemove(req.params.id,(err,house)=>{
        if(err || !house) 
          res.status(400).send(err||'House not found');
        else
          res.send(house.name+'is now deleted');
        
       })

     })




router.put('/:houseId/addOwner/:ownerId',(req,res)=>{
  House.findById(req.params.houseId, (err,house)=>{
    if(err ||!house) {
      return res.status(400).send(err || 'House not found');
    }





    let ownerId = req.params.ownerId;

    house.owner = ownerId;

    house.save((err, savedHouse)=>{
      res.status(err?400:200).send(err || savedHouse);
    });
  
  })

})
router.put('/:id',(req,res)=>{
 House.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, todo) => {
      if(err) {
        return res.status(400).send(err);
      }

      House.findById(req.params.id, (err, house) => {
        res.status(err ? 400 : 200).send(err || house);
      });
    });
  })



module.exports = router;



