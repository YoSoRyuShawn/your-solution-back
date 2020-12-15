var express = require("express");
var router = express.Router();
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/createPaymentIntent", async (req, res) => {
  const result = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "jpy",
    description: "1 hour consulting",
    // metadata: { username: req.body.username, tranId: "11111" },
  });

  console.log(result);
  res.json(result);
});

module.exports = router;
