var router = require("express").Router()

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

  burger.all(function (result) {

    var hbsObject = {
      burgers: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put('/burgers/:burgerId', function (req, res) {
  burger.update('devoured', 1, req.body.burger_id, function (result) {
    console.log(result);
    res.redirect('/');
    
  });
});

router.post('/burgers/create', function (req, res) {
  burger.new('burger_name', req.body.burger_name, function (result) {
    res.redirect('/');
    console.log(result);
  });
});





module.exports = router;