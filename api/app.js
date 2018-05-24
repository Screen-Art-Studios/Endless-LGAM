var express = require("express");
var bodyParser = require("body-parser");
var port = 81;
var app = express();
var router = express.Router();
var path = __dirname + "/views/";
var donate = require('./donate.js');
var contact = require('./contact.js');

app.use(bodyParser.json());
app.use(express.static(path));
app.use("/",router);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  next()
})

app.listen(port, () => {
  console.log("Live at Port " + port);
})

app.use("/donate", donate);
app.use("/contact", contact);

router.use( (req,res,next) => {
  console.log("/" + req.method);
  next();
})

router.get("/", (req,res) => {
  res.sendFile(path + "index.html");
})

app.use("*", (req,res) => {
  res.sendFile(path + "404.html");
})
