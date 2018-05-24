var express = require("express");
var nodemailer = require('nodemailer');
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();

app.use(bodyParser.json());

router.post("/", (req,res) => {
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
        to: 'royce.birnbaum@gmail.com', // list of recipients
        subject: 'Customer Message', // Subject line
        text: req.body.message, // plaintext body
        html: req.body.message // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
            res.send(error);
        }
        res.send('success')
    });
  }
})

module.exports = router;
