const express = require("express");
const router = express.Router();
const Events = require("../models/Events");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

router.post(
  "/insert",
  fetchuser,
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
      description: req.body.description,
      price: req.body.price,
      photo: req.body.photo,
      user: req.user.id,
    })
      .then((user) => res.json({ success: true, message: user }))
      .catch((err) =>
        res.status(500).json({ success: false, message: "Some Error occured" })
      );
  }
);

router.put("/updateEvents/:id", fetchuser, async (req, res) => {
  try {
    const { etitle, epurpose, ename, eaddress, ephone, edescription, eprice, ephoto } = req.body;
    const newEvent = {};
    try {
      if (etitle) {
        newEvent.title = etitle;
      }
      if (epurpose) {
        newEvent.purpose = epurpose;
      }
      if (ename) {
        newEvent.name = ename;
      }
      if (eaddress) {
        newEvent.address = eaddress;
      }
      if (ephone) {
        newEvent.phone = ephone;
      }
      if (edescription) {
        newEvent.description = edescription;
      }
      if (eprice) {
        newEvent.price = eprice;
      }
      if (ephoto) {
        newEvent.photo = ephoto;
      }

      let event = await Events.findById(req.params.id);
      if (!event) {
        res.status(400).json({ success: false, message: "Not found" });
      }
      if (event.user.toString() !== req.user.id) {
        res.status(401).json({ success: false, message: "Not allowed" });
      }

      event = await Events.findByIdAndUpdate(
        req.params.id,
        { $set: newEvent },
        { new: true }
      );
      res.json({ success: true, message: event });
    } catch (error) {
      res.status(500).json({ success: false, message: "Can't Fetch the data" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Can't find the data" });
  }
});

router.get("/myevents", fetchuser, async (req, res) => {
  try {
    const event = await Events.find({ user: req.user.id });
    res.json({ success: true, message: event });
  } catch (err) {
    res.status(500).json({ success: false, message: "Can't Fetch the data" });
  }
});

router.delete("/deleteEvent/:id", fetchuser, async (req, res) => {
  try {
    let event = await Events.findById(req.params.id);
    if (!event) {
      res.status(400).json({ success: false, message: "Not found" });
    }
    if (event.user.toString() !== req.user.id) {
      res.status(401).json({ success: false, message: "Not allowed" });
    }

    //Delete the events of the given id
    event = await Events.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: event });
  } catch (err) {
    res.status(500).json({ success: false, message: "Can't Fetch the data" });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await Events.find({});
    res.json({ success: true, message: events });
  } catch (err) {
    res.status(500).json({ success: false, message: "Can't Fetch the data" });
  }
});

module.exports = router;
