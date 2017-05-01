//Setting up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port:3306,
	host: "localhost",
	user: "root",
	password: "AaNichol91!",
	database: "burgers_db"
});

//Connecting to MySQL
connection.connect(function(error){
	if(error){
		console.log("error connecting: " + error.stack);
	}else{
		console.log("connected as id " + connection.threadId);
	}
});

//Export our database connection for our ORM queries 
module.exports = connection;