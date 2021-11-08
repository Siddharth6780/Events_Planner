const express = require("express");
const router = express.Router();
const Events = require("../models/Events");
const { body, validationResult } = require("express-validator");

router.post(
  "/insert",
  [
    body("title", "Enter Correct Title").isLength({ min: 3 }),
    body("name", "Enter Correct Name").isLength({ min: 5 }),
    body("phone", "Enter Correct Phone Number").isLength({ min: 10, max: 10 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array() });
    }
    Events.create({
      title: req.body.title,
      purpose: req.body.purpose,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    })
      .then((user) => res.json({ success: true, message: user }))
      .catch((err) =>
        res.status(500).json({ success: false, message: "Some Error occured" })
      );
  }
);

router.get("/", async (req, res) => {
  try {
    const events = await Events.find({});
    res.json({ success: true, message: events });
  } catch (err) {
    res.status(500).json({ success: false, message: "Can't Fetch the data" });
  }
});

module.exports = router;
