var connection = require("../config/connection.js");

var orm = {
	create: function(newBurger, cb){
		var queryString = "INSERT INTO burgers SET ?";
		connection.query(queryString, {burger_name: newBurger}, function(error, response){
			if(error){
				console.log(error);
			};

			cb(response);        
		});
	},

	read: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(error, response){
			if(error){
				console.log(error);
			}

			cb(response);
		});
	},

	update: function(columnVals, condition, cb){
		var queryString = "UPDATE burgers SET devoured = ? WHERE ?";
		connection.query(queryString, columnVals, condition, function(error, response){
			if(error){
				console.log(error);
			}
			console.log(queryString);
			cb(response);
		});
	}
};

module.exports = orm;