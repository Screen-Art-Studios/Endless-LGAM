var stripe = require("stripe")("sk_test_654FY0haAwHGptIM35KfSRx5");
var express = require("express");
var nodemailer = require('nodemailer');
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
    description: 'Donation',
    source: token,
  });

  if (req.body.recipients !== '') {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
          host: 'smtp.office365.com', // Office 365 server
          port: 587,     // secure SMTP
          ignoreTLS: false,
          requireTLS: true,
          auth: {
              user: 'kendria@endlesslovegraceandmercy.org',
              pass: 'eLgmkend8!'
          },
          tls: {
              ciphers: 'SSLv3'
          }
      });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Endless Love Grace & Mercy" <kendria@endlesslovegraceandmercy.org>', // sender address
        to: req.body.recipients, // list of recipients
        subject: 'Donation Receipt', // Subject line
        text: `Thank you for your donation to Endless Love Grace & Mercy homeless shelter! You donated ${req.body.ammount/100} at ${new.Date()}.`, // plaintext body
        html: `<h2 style="color: red">Thank you for your donation to Endless Love Grace & Mercy homeless shelter!</h2>
        <h4> You donated ${req.body.ammount/100} at ${new.Date()}.</h4>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
            res.send(error);
        }
        res.send('success')
    });
  } else {
    res.send('success')
  }
})

module.exports = router;
