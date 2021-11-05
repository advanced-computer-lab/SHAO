
const express = require("express");
const Flight = require('../models/Flight');
const FlightRoutes = express.Router();



FlightRoutes.get('/Showflights', (req,res) => {
  Flight.find({})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.get('/Addflight', (req,res) => {
  
        res.send();
});

FlightRoutes.post("/Addflight", (req, res) => {
    
  var number = Number(req.body.Flight_number);
    var dep = req.body.DepartureTime;
    var arr = req.body.ArrivalTime;
    var ec = Number(req.body.EconomySeats);
    var bz = Number(req.body.BusinessSeats);
    var airport= req.body.Airport;
   console.log("tEst",number,dep,arr,ec,bz,airport)
 
   const flight =new Flight({
     FlightNumber : number,
     DepartureTime : dep,
     ArrivalTime : arr ,
     EconomySeats: ec,
     BusinessSeats: bz,
     Airport: airport});
 
 flight.save().then(
   data=>{
   res.send("confirmed");
 }
 ).catch(err=>{
   console.log(err);
 })
   console.log("confirmed");
   res.redirect("/");
 });

module.exports = FlightRoutes