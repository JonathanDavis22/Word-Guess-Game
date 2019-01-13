CREATE DATABASE IF NOT EXISTS top_songsDB;

USE top_songsDB;

DROP TABLE IF EXISTS Top5000;
CREATE TABLE Top5000 (
	id INT(4) AUTO_INCREMENT NOT NULL,
    artist VARCHAR(75),
    song_title VARCHAR(100),
    released INT(4),
    total_sales DECIMAL(10,5),
    US_sales DECIMAL(10,5),
    UK_sales DECIMAL(10,5),
    Europe DECIMAL(10,5),
    Other DECIMAL(10,5),
    PRIMARY KEY (id)
);

CREATE TABLE topAlbums (
	id INT(4) AUTO_INCREMENT NOT NULL,
    artist VARCHAR(75),
    album VARCHAR(100),
    released INT(4),
	total_sales DECIMAL(10,5),
    US_sales DECIMAL(10,5),
    UK_sales DECIMAL(10,5),
    Europe DECIMAL(10,5),
    Other DECIMAL(10,5),
    PRIMARY KEY (id)
);