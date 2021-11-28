const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema =  new Schema ({
  FlightNumber: {
    type: Number,
    required: true,
  },
  DepartureTime: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
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
  }, 
  TicketsPrice: {
    type: Number,
    required: true,
  }
}, { timestamps: true });
mongoose.models={}
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;