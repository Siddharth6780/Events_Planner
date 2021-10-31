require("dotenv").config();
const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use("/events", require("./routes/events"));
app.use("/users", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
