const mongoose = require("mongoose");

const citiesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ascii: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  feat_class: {
    type: Date,
    required: true,
  },
  feat_code: {
    type: Boolean,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  admin1: {
    type: String,
    required: true,
  },
  admin2: {
    type: String,
    required: true,
  },
  population: {
    type: String,
    required: true,
  },
  dem: {
    type: String,
    required: true,
  },
  tz: {
    type: String,
    required: true,
  },
  modified_at: {
    type: String,
    required: true,
  },
});

// export model user with Cities Schema
module.exports = mongoose.model("cities", citiesSchema);
