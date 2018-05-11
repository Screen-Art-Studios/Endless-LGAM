var stripe = require("stripe")("sk_test_654FY0haAwHGptIM35KfSRx5");
var express = require("express");
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();

app.use(bodyParser.json());

router.post("/", (req,res) => {
  const token = req.body.stripeToken;

  const charge = stripe.charges.create({
    amount: req.body.ammount,
    currency: 'usd',
    description: 'Example charge',
    source: token,
  });

  res.send('success')
})

module.exports = router;
