// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      console.log("Starting my Modeling career");
        orm.selectAll("burgers", function(res) {
          console.log("Back in model, sending results back");
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      new: function(vals, cb) {
        orm.insertOne("burgers", vals, function(res) {
          cb(res);
        });
      },
      update: function(condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
          cb(res);
        });
      }

}


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;