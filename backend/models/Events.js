const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
  },
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
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  }
});

const events = mongoose.model("events", EventsSchema);
module.exports = events;
