var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.



module.exports = {
    findAll: function(req, res){
        console.log("Starting Controller");
        burger.all(function(result){
            console.log("Send results to client, front end");
            // send data back to client 
            res.json(result)
        })
    },
    create: function(req, res){
        burger.new(function(result){
            // send data back to client 
            res.json(result)
        }) 
    },
    update: function(req, res){
        burger.update(function(result){
            // send data back to client 
            res.json(result)
        }) 
    }


};


