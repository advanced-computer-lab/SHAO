const express = require("express");
const mongoose = require('mongoose');
const bodyp=require("body-parser");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');



//hidedb
require("dotenv").config();
const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));






const app = express();
const port = process.env.PORT || 8080;
const User = require('./models/User');
/*const newUser = new User({
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

  */
  
  
   // console.log(User.find());


app.get('/createflight', (req,res) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
 app.post('/createflight',function(req,res) {
  // var number = Number(req.body.flightNumber);
  // var dep = req.body.departureTime;
  // var arr = req.body.arrivalTime;
  // var ec = Number(req.body.economySeats);
  // var bz = Number(req.body.businessSeats);
  // var airport= req.body.airport;
  

  const flight =new Flight({
    FlightNumber : 22,
    DepartureTime : "12",
    ArrivalTime : "arr" ,
    EconomySeats: 200,
    BusinessSeats: 200,
    Airport: "airport"});

flight.save().then(
  data=>{
  res.send("confirmed");
}
).catch(err=>{
  console.log("err");
})
  
  
  
})


    

  
app.listen(port, () => {
  console.log("connected")
})