var router = require("express").Router()

var htmlRoutes = require("./htmlroutes.js");

var apiRoutes = require("./apiroutes.js");

console.log("Starting Routes");

router.use("/api", apiRoutes)

router.use("/", htmlRoutes)

module.exports = router;