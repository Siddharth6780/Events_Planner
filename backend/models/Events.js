const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventsSchema = new Schema({
  title: {
    type: string,
    required: true,
  },
  purpose: {
    type: string,
    required: true,
  },
  name: {
    type: string,
    required: true,
  },
  address: {
    type: string,
    required: true,
  },
  purpose: {
    type: Number,
    required: true,
  },
});

module.export = mongoose.model("events", EventsSchema);
