const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/events", require("./routes/events"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
