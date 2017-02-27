var express = require("express");
var apiV1 = require("./api");

var router = express.Router();

router.use("/api/v1", apiV1);

router.get('/', function(req, res){
  res.render('index');
})

module.exports = router;
