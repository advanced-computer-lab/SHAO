const express = require("express");
const { Mongoose } = require("mongoose");
const { collection, db } = require("../models/Flight");
const Flight = require('../models/Flight');
const User = require("../models/User");
const UserRoutes = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
// const authController= require('./authcontroller.js');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51KABeOLJRcHi1IfiKryTGkirJXZY3NaRjS7ZI7nkDGu9m0AogGtkgACmKzAyVgM3Cfarb7zUzzPdpkifs7atdRqO00Q3B3kwqg");
var crypto = require("crypto");

UserRoutes.use(express.json());
UserRoutes.use(cors());

UserRoutes.post("/checkout", async (req,res) => {
console.log("Request:", req.body);

let error;
let status;

try {
  const {product, token}=req.body;
  const customer = await
  stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  var uuid = crypto.randomBytes(20).toString('hex');
  const idempotency_key = uuid;
  const charge = await stripe.charges.create({
    amount: product.price * 100,
    currency: "usd",
    customer: customer.id,
    receipt_email: token.email,
    description: 'Purchased the' + product.name,
    shipping: {
      name: token.card.name,
      address: {
        line1: token.card.address_line1,
        line2: token.card.address_line2,
        city: token.card.address_city,
        country: token.card.address_country,
        postal_code: token.card.address_zip,


      }
    }
  },
  {
    idempotency_key
  }
  );

  console.log("Charge:", {charge});
  status = "success";
} catch (error) {
  console.error("Error:", error);
  status = "failure";
  
}

res.json({error, status});
});




  UserRoutes.post('/reserve/:id', (req,res) => {
    
  var rf = [];
  var f = false;

    console.log(req.params.id);


  User.findById(req.params.id, function (err, docs) {
// console.log(docs)
  rf = docs.ReservedFlights;
  for(var i=0; i<=rf.length;i++)
  {
    if(rf[i]===req.body.id)
    {
      f = true;
    }
  }



  //console.log(f);
  //console.log(rf);
  if(f == false)
  {


   User.findByIdAndUpdate(req.params.id, {$push: {ReservedFlights: req.body.id}})
 
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


    User.findByIdAndUpdate(req.params.id, {$pull: {ReservedFlights: req.body.id}})
  
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

      User.findById(req.params.id).then(result => {
                res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    
    });


    UserRoutes.post('/update/:id', (req,res) => {
      
      User.findByIdAndUpdate(req.params.id, req.body, {new : true}).then(result => {
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

    
    UserRoutes.get('/Showresflights/:id', async (req, res) => {
console.log(req.params.id)
      try {
        const rfs = (await User.findById(req.params.id).lean().exec()).ReservedFlights;
    
        const flights = await Flight.find({
          _id: { $in: rfs }
        }).lean().exec();
        console.log(flights)

            res.json(flights);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });





    UserRoutes.post('/reserveseats/:id', (req,res) => {
    
      User.findByIdAndUpdate(req.params.id,{ReservedSeats:req.body.ReservedSeats},{new : true}).catch(err => {
        console.log(err);
      
    });
    console.log(req.body.id)
Flight.findById(req.body.id).then(result => {
  for (let i = 0; i <= req.body.ReservedSeats.length; i++) {
    
    if(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableFSeats.splice(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.body.id,{ AvailableFSeats : result.AvailableFSeats},{new : true}).catch(err => {
        console.log(err);
      
    });;
    Flight.findByIdAndUpdate(req.body.id,{ First : result.AvailableFSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
    }
    if(result.AvailableESeats.indexOf(req.body.ReservedSeats[i])!==-1){
      result.AvailableESeats.splice(result.AvailableESeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.params.id,{ AvailableESeats : result.AvailableESeats},{new : true}).catch(err => {
        console.log(err);
      
    });
    Flight.findByIdAndUpdate(req.body.id,{ EconomySeats : result.AvailableESeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    if(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableBSeats.splice(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.body.id,{ AvailableBSeats : result.AvailableBSeats},{new : true}).catch(err => {
        console.log(err);
      
    });
  
    Flight.findByIdAndUpdate(req.body.id,{ BusinessSeats : result.AvailableBSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    
  }
})
.catch(err => {
  console.log(err);
});

    
    });






    
    // UserRoutes.get('/token', (req,res) => {
      
    //   var token = jwt.sign({username:"aly"}, 'supersecret',{expiresIn: 420});
    //   res.send(token)
    //   console.log("token: "+token);

    
    // });


    
// UserRoutes.post("/register", (req, res) => {
    
//  var Name = req.body.Name;
//  var Email = req.body.Email ;
//  var Password = req.body.Password;
//  var Age = Number.parseInt(req.body.Age);
//  var BornIn = req.body.BornIn;
//  var LivesIn = req.body.LivesIn;
//  var PhoneNumber =  req.body.PhoneNumber;
//  var MartialStatus = req.body.MartialStatus;
   
//  const nuser =new User({
//    Name:Name,
//    Email:Email ,
//    Password:Password,
//    Age:Age,
//    BornIn:BornIn,
//    LivesIn:LivesIn,
//    MartialStatus:MartialStatus,
//    PhoneNumber: PhoneNumber,
//    isAdmin: false
//    });

//    nuser.save().then(
//     data=>{
//     console.log(Name+"'s Account Added");
//   }
//   ).catch(err=>{

//     if(User.exists({Email:Email})){
//        console.log("Email Already Exists"); 
//        return res.status(409).json({
//       message: 'Mail exists'});
//     }
//   })
// });





// let refreshTokens = []

// UserRoutes.post('/token', (req, res) => {
//   const refreshToken = req.body.token
//   if (refreshToken == null) return res.sendStatus(401)
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateAccessToken({ name: user.name })
//     res.json({ accessToken: accessToken })
//   })
// })

// UserRoutes.delete('/logout', (req, res) => {
//   refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//   res.sendStatus(204)
// })

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
// }



// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err)
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }


// const dec = require('jwt-decode');





  
// UserRoutes.post("/login", (req, res) => {
//   var decoded = dec(req.headers)
//   console.log(decoded);
//   var Email = req.body.Email ;
//   var Password = req.body.Password;

//   if(User.exists({Email:Email},{Password:Password}))
//   {
//     //authentication

    
//   const Email = req.body.Email;
//   const em = { Email: Email };

//   const accessToken = generateAccessToken(em)
//   const refreshToken = jwt.sign(em, process.env.REFRESH_TOKEN_SECRET)
//   refreshTokens.push(refreshToken)
//   res.json({ accessToken: accessToken, refreshToken: refreshToken })
//   }  






//  });
 




module.exports = UserRoutes;