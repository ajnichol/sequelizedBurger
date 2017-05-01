var orm = require("../config/orm.js");

var burger = {
	create: function(newBurger, cb){
		orm.create(newBurger, function(response){
			cb(response);
		});
	},

	read: function(cb){
		orm.read(function(response){
			cb(response);
		});
	},

	update: function(columnVals, condition, cb){
		orm.update(columnVals, condition, function(res){
			cb(res);
		});
	}

};

module.exports = burger;

