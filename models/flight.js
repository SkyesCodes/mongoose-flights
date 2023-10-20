const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'United', 'Delta'] },
  airport: {
    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    enum: [10,9999]
  },
  departs: {
    type: Date
  }
});
 
// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);