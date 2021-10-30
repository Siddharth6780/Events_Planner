const express = require("express");
const router = express.Router();
const Signup = require("../models/Auth");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");

router.post(
  "/",
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
    Signup.create({
      email: req.body.email,
      password: hasedPassword,
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).send("Some Error occured"));
  }
);

module.exports = router;
