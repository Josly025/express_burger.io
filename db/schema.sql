
CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured VARCHAR (50) NOT NULL,
PRIMARY KEY (id)
);