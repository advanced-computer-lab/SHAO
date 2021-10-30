const express = require("express");
const mongoose = require('mongoose');
const bodyp=require("body-parser");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');



//hidedb
require("dotenv").config();
const uri = process.env.uri;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));






const app = express();
const port = process.env.PORT || "3000";
const User = require('./models/User');
const newUser = new User({
  Name: "aliiiii",
  Email: "aliiii@admin.com",
  Password: "1234",
  Age:21,
  BornIn: "Cairo",
  LivesIn:"Cairo",
  MartialStatus: "Single",
  PhoneNumber:"011xxxxxx",
  isAdmin: true});
  newUser.save().then(
    data=>{
    console.log("confirmed");
  }
  ).catch(err=>{
    console.log("err1");
  })
  
    
    
  
  
    console.log(User.find());
  
app.listen(port, () => {
  console.log("connected")
})