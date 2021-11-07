
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
app.use("/flight",Flightcontrol)

  
  


  
app.listen(port, () => {
  console.log("connected",port)
});