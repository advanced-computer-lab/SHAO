const express = require("express");
const { Mongoose } = require("mongoose");
const { collection, db } = require("../models/Flight");
const Flight = require('../models/Flight');
const User = require("../models/User");
const Users = require('../models/User');
const UserRoutes = express.Router();








  UserRoutes.post('/reserve/:id', (req,res) => {
    
  var rf = [];
  var f = false;

    


  User.findById("61a52b332239b52f7ef5cc68", function (err, docs) {

  rf = docs.ReservedFlights;
  for(var i=0; i<=rf.length;i++)
  {
    if(rf[i]===req.params.id)
    {
      f = true;
    }
  }



  //console.log(f);
  //console.log(rf);
  if(f == false)
  {


   User.findByIdAndUpdate("61a52b332239b52f7ef5cc68", {$push: {ReservedFlights: req.params.id}})
 
   .then(result => {
     //console.log(result);
     res.send(result);
         })
         .catch(err => {
           console.log(err);
         });

  }

 else
  {
         console.log("Already Reserved");
 }




  
  });

        
    });

 

  UserRoutes.post('/cancelreserve/:id', (req,res) => {


    User.findByIdAndUpdate("61a52b332239b52f7ef5cc68", {$pull: {ReservedFlights: req.params.id}})
  
          .then(result => {
            
           // console.log(result);
            res.send(result);
          })
          .catch(err => {
            console.log(err);
          });
    });
    


    UserRoutes.get('/Profile/:id', (req,res) => {
      
      User.findById("61a52b332239b52f7ef5cc68").then(result => {
        //console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    
    });


    UserRoutes.post('/update/:id', (req,res) => {
      
      User.findByIdAndUpdate("61a52b332239b52f7ef5cc68", req.body, {new : true}).then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    
    });

    
    UserRoutes.get('/Showresflights', async (req, res) => {

      try {
        const rfs = (await User.findById("61a52b332239b52f7ef5cc68").lean().exec()).ReservedFlights;
    
        const flights = await Flight.find({
          _id: { $in: rfs }
        }).lean().exec();
            res.json(flights);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


    











module.exports = UserRoutes;