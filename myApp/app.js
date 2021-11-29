
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const axios = require('axios').default;

const cors = require ("cors")
//hidedb
require("dotenv").config();
const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));





const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;
const User = require('./models/User');
const Flight = require('./models/Flight');
const Flightcontrol = require("./controller/Flightcontroller");
const usercontrol=require("./controller/Usercontroller");
app.use("/flight",Flightcontrol);
app.use("/user",usercontrol);
const newUser = new User({
  Name: "User1",
  Email: "User@user.com",
  Password: "1234",
  Age:21,
  BornIn: "Cairo",
  LivesIn:"Cairo",
  MartialStatus: "Single",
  PhoneNumber:"011xxxxxx",
  isAdmin: false,
  ReservedFlights:[],
  ReservedSeats: []
});
  newUser.save().then(
    data=>{
    console.log("confirmed");
  }
  ).catch(err=>{
    console.log("err1");
  });
  
  


  
app.listen(port, () => {
  console.log("connected",port)
});