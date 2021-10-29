const express = require("express");
const mongoose = require('mongoose');
const bodyp=require("body-parser");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shady:shady1234@airline.tqj19.mongodb.net/Airlines?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
mongoose.connect("mongodb+srv://shady:shady1234@airline.tqj19.mongodb.net/Airlines?retryWrites=true&w=majority",{useNewUrlParser : true})
const app = express();
const port = process.env.PORT || "3000";
const User = require('./models/User');
const newUser = new User({
  Name: "Shady",
  Email: "shady@admin.com",
  Password: "1234",
  Age:21,
  BornIn: "Cairo",
  LivesIn:"Cairo",
  MartialStatus: "Single",
  PhoneNumber:"011xxxxxx",
  isAdmin: true});
  newUser.save();

  console.log(user.find())


app.listen(port, () => {
  console.log("connected")
})