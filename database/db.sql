CREATE DATABASE productsdb IF NOT EXISTS;

USE productsdb;

CREATE TABLE product (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  name VARCHAR(255)  NOT NULL  ,
  descripton VARCHAR(255)  NOT NULL  ,
  price DECIMAL(18,4)  NULL  ,
  createdAt TIMESTAMP  NULL DEFAULT CURRENT_TIMESTAMP   ,
PRIMARY KEY(id));


