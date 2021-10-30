const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");

router.post(
  "/signup",
  body("email", "Enter correct Email Address").isEmail(),
  body("password", "Password Should be atleast 5 character long").isLength({
    min: 5,
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var salt = await bcrypt.genSalt();
    var hasedPassword = await bcrypt.hash(req.body.password, salt);
    Auth.create({
      email: req.body.email,
      password: hasedPassword,
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).send("Some Error occured"));
  }
);

router.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  try {
    let user = await Auth.findOne({ email });
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
