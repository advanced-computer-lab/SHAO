const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema =  new Schema ({
  FlightNumber: {
    type: String,
    required: true,
  },
  DepartureTime: {
    type: String,
    required: true
  },
  To: {
    type: String,
    required: true
  },
  From: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
    required: true
  },
  
  First: {
    type: Number,
    required: true,
  },
 
  EconomySeats: {
    type: Number,
    required: true,
  },
  BusinessSeats: {
    type: Number,
    required: true
  },
  ArrivalTerminal: {
    type: String,
    required: true
  },
  DepartureTerminal: {
    type: String,
    required: true
  }}, { timestamps: true });
mongoose.models={}
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;