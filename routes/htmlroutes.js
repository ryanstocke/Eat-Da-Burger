var router = require("express").Router()

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  
    burger.all(function(result) {
   
      var hbsObject = {
        burgers: result
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


module.exports = router;