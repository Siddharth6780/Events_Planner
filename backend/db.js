const mongoose = require("mongoose");

const mongo_uri =
  "mongodb://localhost:27017/Events_Planner?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongo_uri, () => {
    console.log("Connected to Mongoose");
  });
};

module.exports = connectToMongo;
