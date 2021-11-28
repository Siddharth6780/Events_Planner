const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to Mongoose");
  });
};

module.exports = connectToMongo;
