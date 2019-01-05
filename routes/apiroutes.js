var router = require("express").Router()

var burgerController = require("../controllers/burgers_controller.js");

console.log("starting API routes");

router.route("/burgers")
.get(burgerController.findAll)
.post(burgerController.create)



router.route("/burgers/:burgerId")
.put(burgerController.update)


module.exports = router;
