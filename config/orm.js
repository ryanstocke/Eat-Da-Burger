var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		console.log("Starting ORM");
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			console.log("Finished Inserting, sending results back");
			cb(result);
		});
	},
	insertOne: function(table, vals, cb) {
		var queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES ("${vals}", false);`;
		connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
		});
	},
	updateOne: function(table, condition, cb) {
		var queryString = `UPDATE ${table} SET devoured = true WHERE ${condition};`;
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;