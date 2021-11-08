const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

router.post(
  "/signup",
  body("email", "Enter correct Email Address").isEmail(),
  body("password", "Password Should be atleast 5 character long").isLength({
    min: 5,
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array() });
    }
    try {
      var salt = await bcrypt.genSalt();
      var hasedPassword = await bcrypt.hash(req.body.password, salt);
      const user = await Auth.create({
        email: req.body.email,
        password: hasedPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const jwtData = await jwt.sign(data, process.env.JWT_TOKEN);
      console.log(jwtData);
      res.status(200).json({ success: true, message: jwtData });
    } catch (error) {
      res.status(500).json({ success: false, message: "Some Error Occured" });
    }
  }
);

router.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  try {
    let user = await Auth.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: "Wrong Details" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      res.status(400).json({ success: false, message: "Wrong Details" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const jwtData = await jwt.sign(data, process.env.JWT_TOKEN);
    console.log(jwtData);
    res.status(200).json({ success: true, message: jwtData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Some Error Occured" });
  }
});

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await Auth.findById(userId).select("-password");
    res.json({ success: true, message: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Some Error Occured" });
  }
});

module.exports = router;
