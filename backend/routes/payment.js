const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.PRIVATE_KEY);
const uuid = require("uuid").v4;

router.post("/", async (req, res) => {
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
        description: "Purchase Product",
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    res.status(200).json({ success: true, message: "Successfully Paid" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Can't Fetch the data" });
  }
});

module.exports = router;
