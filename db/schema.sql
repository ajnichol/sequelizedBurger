CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int unsigned auto_increment NOT NULL,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);