var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// router.get('/', function(req, res) {
// 	res.redirect('/index');
// });

router.get("/", function (req, res) {

    burger.all(function (result) {

        var hbsObject = {
            burgers: result
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



router.post("/api/burgers", function (req, res) {
    burger.new(req.body.burger_name, function (result) {
            // Send back the ID of the new quote
            res.json(result);
        });
});


router.put('/api/burgers/:id', function (req, res) {
    var id = 'id = ' + req.body.id;
    burger.update(id, function(result){
        res.json(result);
    });
});



// module.exports = {
//     findAll: function (req, res) {
//         console.log("Starting Controller");
//         burger.all(function (result) {
//             console.log("Send results to client, front end");
//             // send data back to client 
//             res.json(result)
//         })
//     },
//     create: function (req, res) {
//         burger.new(function (result) {
//             // send data back to client 
//             res.json(result)
//         })
//     },
//     update: function (req, res) {
//         burger.update(function (result) {
//             // send data back to client 
//             res.json(result)
//         })
//     }


// };

module.exports = router;

