var express = require("express");

var router = express.Router();

router.get("/accounts", function(req, res){
  res.json([
    {
      id: 1,
      name: "Yuan Wor",
      balance: "4000"
    }
  ]);
})

module.exports = router;
