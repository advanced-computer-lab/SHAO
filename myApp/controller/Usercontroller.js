const express = require("express");
const Flight = require('../models/Flight');
const Users = require('../models/User');
const UserRoutes = express.Router();

UserRoutes.post('/reserve/:id', (req,res) => {

  
    console.log(req.body,"tt");
    Flight.findByIdAndUpdate(req.params.id,{AvailableFSeats:f, AvailableESeats:e,AvailableBSeats:b},{new : true}).catch(err => {
      console.log(err);
    
  });
    Flight.findByIdAndUpdate(req.params.id,req.body,{new : true})
        .then(result => {
          console.log(result);
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
  });















module.exports = UserRoutes;