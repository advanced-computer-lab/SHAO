
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

FlightRoutes.get('/Login', (req,res) => {
  
  res.send();
});


FlightRoutes.post("/Login", (req, res) => {
    
  var Username = req.body.Username;
    var Password = req.body.Password;
    
 
   const user =new user({
     Username : Username,
     Password :Password ,
     
    });
 user.save().then(
   data=>{
    res.redirect("http://localhost:3000/Home");
 }
 ).catch(err=>{
   console.log(err);
 })
   console.log("confirmed");
   
 });


FlightRoutes.get('/Addflight', (req,res) => {
  
        res.send();
});

FlightRoutes.post("/Addflight", (req, res) => {
    
  var number = Number(req.body.Flight_number);
    var dep = req.body.DepartureTime;
    var arr = req.body.ArrivalTime;
<<<<<<< Updated upstream
    var ec = Number(req.body.EconomySeats);
    var bz = Number(req.body.BusinessSeats);
    var airport= req.body.Airport;
   console.log("tEst",number,dep,arr,ec,bz,airport)
=======
    var Fr = req.body.First;
    var ec = req.body.EconomySeats;
    var bz = req.body.BusinessSeats;
    var Arrt= req.body.ArrivalTerminal;
    var Dept= req.body.DepartureTerminal;
    var ticket=req.body.TicketsPrice;
   
>>>>>>> Stashed changes
 
   const flight =new Flight({
     FlightNumber : number,
     DepartureTime : dep,
     ArrivalTime : arr ,
     EconomySeats: ec,
     BusinessSeats: bz,
<<<<<<< Updated upstream
     Airport: airport});
=======
     ArrivalTerminal:Arrt,
     DepartureTerminal:Dept,
     TicketsPrice:ticket
    });
>>>>>>> Stashed changes
 
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