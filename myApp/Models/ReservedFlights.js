const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservedFlightsSchema =  new Schema ({
  Flightid: {
    type: String,
    required: true,
    unique : true,
  },
  Seats:{
    type: [],
    required: true,
    unique: true,
  },
}, { timestamps: true });
mongoose.models={}
const ReservedFlights = mongoose.model('ReservedFlights', flightSchema);
module.exports = ReservedFlights;