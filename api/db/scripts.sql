CREATE DATABASE IF NOT EXISTS db_site_frutas4;
USE db_site_frutas4;

CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    price DECIMAL(10,2),
    PRIMARY KEY(id)
);

INSERT INTO products VALUES(0, 'Uva', 10);
INSERT INTO products VALUES(0, 'Pessego', 15);
