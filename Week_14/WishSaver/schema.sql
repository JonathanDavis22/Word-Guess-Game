DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

SELECT * FROM wishes;

-- Create the table tasks.
DROP TABLE IF EXISTS wishes;
CREATE TABLE wishes (
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('No child is unhappy.');
INSERT INTO wishes (wish) VALUES ('Everyone is fed.');
INSERT INTO wishes (wish) VALUES ('The planet is clean.');