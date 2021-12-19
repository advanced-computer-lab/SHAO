const express = require("express");
const { Mongoose } = require("mongoose");
const { collection, db } = require("../models/Flight");
const Flight = require('../models/Flight');
const User = require("../models/User");
const Users = require('../models/User');
const UserRoutes = express.Router();
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');







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
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aclproject23@gmail.com',
        pass: '#acl123456'
      }
    });
    console.log(result.Email)
    var mailOptions = {
      from: 'aclproject23@gmail.com',
      to: 'aclproject23@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'how are you dear,'+result.Name+'Your flight reservation was confirmed'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
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
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'aclproject23@gmail.com',
                pass: '#acl123456'
              }
            });
            console.log(result.Email)
            var mailOptions = {
              from: 'aclproject23@gmail.com',
              to: 'aclproject23@gmail.com',
              subject: 'Sending Email using Node.js',
              text: 'how are you dear,'+result.Name+'Your flight reservation was canceld'
            };
            
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
            
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
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'aclproject23@gmail.com',
            pass: '#acl123456'
          }
        });
        console.log(result.Email)
        var mailOptions = {
          from: 'aclproject23@gmail.com',
          to: 'aclproject23@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'Dear,'+result.Name+'Your profile was updated'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
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





    UserRoutes.post('/reserveseats/:id', (req,res) => {
    
      User.findByIdAndUpdate("61a52b332239b52f7ef5cc68",{ReservedSeats:req.body.ReservedSeats},{new : true}).catch(err => {
        console.log(err);
      
    });
Flight.findById(req.params.id).then(result => {
  for (let i = 0; i <= req.body.ReservedSeats.length; i++) {
    
    if(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableFSeats.splice(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.params.id,{ AvailableFSeats : result.AvailableFSeats},{new : true}).catch(err => {
        console.log(err);
      
    });;
    Flight.findByIdAndUpdate(req.params.id,{ First : result.AvailableFSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
    }
    if(result.AvailableESeats.indexOf(req.body.ReservedSeats[i])!==-1){
      result.AvailableESeats.splice(result.AvailableESeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.params.id,{ AvailableESeats : result.AvailableESeats},{new : true}).catch(err => {
        console.log(err);
      
    });
    Flight.findByIdAndUpdate(req.params.id,{ EconomySeats : result.AvailableESeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    if(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableBSeats.splice(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.params.id,{ AvailableBSeats : result.AvailableBSeats},{new : true}).catch(err => {
        console.log(err);
      
    });
  
    Flight.findByIdAndUpdate(req.params.id,{ BusinessSeats : result.AvailableBSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    
  }
    

    
  


})
.catch(err => {
  console.log(err);
});

    
    });






    
    UserRoutes.get('/token', (req,res) => {
      
      var token = jwt.sign({username:"aly"}, 'supersecret',{expiresIn: 420});
      res.send(token)
      console.log("token: "+token);

    
    });


    
UserRoutes.post("/register", (req, res) => {
    
 var Name = req.body.Name;
 var Email = req.body.Email ;
 var Password = req.body.Password;
 var Age = Number.parseInt(req.body.Age);
 var BornIn = req.body.BornIn;
 var LivesIn = req.body.LivesIn;
 var PhoneNumber =  req.body.PhoneNumber;
 var MartialStatus = req.body.MartialStatus;
   
 const nuser =new User({
   Name:Name,
   Email:Email ,
   Password:Password,
   Age:Age,
   BornIn:BornIn,
   LivesIn:LivesIn,
   MartialStatus:MartialStatus,
   PhoneNumber: PhoneNumber,
   isAdmin: false
   });

   nuser.save().then(
    data=>{
    console.log(Name+"'s Account Added");
  }
  ).catch(err=>{

    if(User.exists({Email:Email})){
       console.log("Email Already Exists"); 
       return res.status(409).json({
      message: 'Mail exists'});
    }
  })
});



  
UserRoutes.post("/login", (req, res) => {
    
  var Email = req.body.Email ;
  var Password = req.body.Password;


  






 });
 




module.exports = UserRoutes;