USE j176ng7wqfo4xwms;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Vegetable Burger", FALSE);
SELECT * FROM burgers;