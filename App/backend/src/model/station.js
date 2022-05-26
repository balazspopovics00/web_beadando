const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: false
  },
  humidity: {
    type: Number,
    required: false
  },
  windSpeed: {
    type: Number,
    required: false
  },
  windDirection: {
    type: String,
    required: false
  },
  pressure: {
    type: Number,
    required: false
  }
});

StationSchema.pre('findOneAndUpdate', next => {
  console.log('pre update hook');
  next();
});

module.exports = mongoose.model('station', StationSchema);
