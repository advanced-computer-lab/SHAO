
const express = require("express");
const Flight = require('../models/Flight');
const FlightRoutes = express.Router();


FlightRoutes.post('/update/:id', (req,res) => {
  console.log(req.body,"tt");
  Flight.findByIdAndUpdate(req.params.id,req.body,{new : true})
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.post('/delete/:id', (req,res) => {
  console.log(req.body,"tt");
  Flight.findByIdAndDelete(req.params.id,{new : true})
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.get('/Showflights', (req,res) => {
  
  Flight.find()
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

FlightRoutes.post('/search', (req,res) => {
  
  Flight.find(req.body,function(err,docs){
    
  }
  ).clone().then(result => {
    console.log(result)
    return res.send(result);
  })
  .catch(err => {
    console.log(err);
  });});

FlightRoutes.post("/Addflight", (req, res) => {
    
  var number = req.body.Flight_number;
    var dep = req.body.DepartureTime;
    var to = req.body.To;
    var from = req.body.From;
    var arr = req.body.ArrivalTime;
    var Fr = req.body.First;
    var ec = req.body.EconomySeats;
    var bz = req.body.BusinessSeats;
    var Arrt= req.body.ArrivalTerminal;
    var Dept= req.body.DepartureTerminal;

    if(from==to) 
    {
      console.log('same place error')
    
    }
 
    else 
    {
   const flight =new Flight({
     FlightNumber : number,
     DepartureTime : dep,
     To:to,
     From:from, 
     ArrivalTime : arr ,
     First:Fr,
     EconomySeats: ec,
     BusinessSeats: bz,
     ArrivalTerminal:Arrt,
     DepartureTerminal:Dept});
 
 flight.save().then(
   data=>{
    res.redirect("http://localhost:3000/flight/Showflights");
 }
 ).catch(err=>{
   console.log(err);
 })}
   console.log("confirmed");
   
 });

module.exports = FlightRoutes