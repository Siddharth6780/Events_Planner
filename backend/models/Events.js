const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const events = mongoose.model("events", EventsSchema);
module.exports = events;
