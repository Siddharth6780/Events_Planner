const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_TOKEN =
  "ed6e3406efa8d18ff6b78c3f552fcbb950984a0b32a9d50945a5984591600fc5121516018e9a1eca4f10fe133e8ce91544841e24b0b7750911c1e3b6c13a4d96";

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
    try {
      var salt = await bcrypt.genSalt();
      var hasedPassword = await bcrypt.hash(req.body.password, salt);
      const user  = await Auth.create({
        email: req.body.email,
        password: hasedPassword,
      })

      const data = {
        user: {
          id: user.id,
        },
      };

      const jwtData = await jwt.sign(data, JWT_TOKEN);
      console.log(jwtData);
      res.status(200).send({jwtData});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
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
