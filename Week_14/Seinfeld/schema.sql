CREATE DATABASE seinfeld;

USE seinfeld;

DROP TABLE IF EXISTS actors;
CREATE TABLE actors (
	id TINYINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50),
    coolness_points TINYINT,
    attitude VARCHAR(50),
    PRIMARY KEY (id)
);

SELECT * FROM actors;

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Jerry", "90", "relaxed"),
("Elaine", "80", "righteous"),
("George", "70", "selfish"),
("Kramer", "20", "clever");