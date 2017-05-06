var express = require("express");

var router = express.Router();

var db = require("../models");

router.post("/", function(req, res){
	db.burgers.create({
		burger_name: req.body.name
		}).then(function(){
		res.redirect("/");
	});
});

router.get("/", function(req, res){
	db.burgers.findAll({}).then(function(data){
		console.log(data);
		var burgerObj = {
			burgers: data
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

router.post("/:id", function(req, res){
	var condition = req.params.id;

	db.burgers.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: condition
		}
	}).then(function() {
		res.redirect("/");
	});
});

module.exports = router;

