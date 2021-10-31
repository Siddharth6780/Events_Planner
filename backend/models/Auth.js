const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Auth = mongoose.model("Auth", AuthSchema);
module.exports = Auth;
