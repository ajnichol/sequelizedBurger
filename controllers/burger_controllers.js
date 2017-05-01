var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.post("/", function(req, res){
	burger.create(req.body.name, function(){
		res.redirect("/");
	});
});

router.get("/", function(req, res){
	burger.read(function(data){
		console.log(data);
		var burgerObj = {
			burgers: data
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

router.post("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.update(req.body.devoured, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;

