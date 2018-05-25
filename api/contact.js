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
            pass: ''
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '"Endless Love Grace & Mercy" <kendria@endlesslovegraceandmercy.org>', // sender address
      to: 'kendria@endlesslovegraceandmercy.org', // list of recipients
      subject: 'Customer Message', // Subject line
      text: `Name: ${req.body.name}
      Email: ${req.body.email}
      Phone: ${req.body.phone}
      Message: ${req.body.message}`, // plaintext body
      html: `<h2>Name: ${req.body.name}</h2>
      <h2>Email: ${req.body.email}</h2>
      <h2>Phone: ${req.body.phone}</h2>
      <h2>Message: ${req.body.message}</h2>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
          res.send(error);
      }
      res.send('success')
  });
})

module.exports = router;
