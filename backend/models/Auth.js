const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const auth = mongoose.model("auth", AuthSchema);
module.exports = auth;
