const express = require("express");
const router = express.Router();
const Login = require("../models/Auth");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  try {
    let user = await Login.findOne({ email });
    if (!user) {
      res.status(400).send("Wrong Details");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      res.status(400).send("Wrong Details");
    }
    res.status(200).send("Correct Details");
  } catch (error) {
    res.status(400).send("Error Occured");
  }
});
module.exports = router;
