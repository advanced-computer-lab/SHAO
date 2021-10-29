const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  FlightNumber: {
    type: Number,
    required: true,
  },
  DepartureTime: {
    type: Date,
    required: true
  },
  ArrivalTime: {
    type: Date,
    required: true
  },
 
  EconomySeats: {
    type: Number,
    required: true,
  },
  BusinessSeats: {
    type: Number,
    required: true
  },
  Airport: {
    type: String,
    required: true
  }}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;