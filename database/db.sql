CREATE DATABASE productsdb IF NOT EXISTS;

USE productsdb;

CREATE TABLE product (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  name VARCHAR(255)  NOT NULL  ,
  descripton VARCHAR(255)  NOT NULL  ,
  price DECIMAL(18,4)  NULL  ,
  createdAt TIMESTAMP  NULL DEFAULT CURRENT_TIMESTAMP   ,
PRIMARY KEY(id));



CREATE TABLE contact (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  description VARCHAR(60)  NOT NULL  ,
  foneA VARCHAR(20)  NULL  ,
  foneB VARCHAR(20)  NULL  ,
  foneC VARCHAR(20)  NULL  ,
  mailA VARCHAR(255)  NULL  ,
  mailB VARCHAR(255)  NULL  ,
  mailC VARCHAR(255)  NULL  ,
  concatContact TEXT  NULL    ,
PRIMARY KEY(id));



CREATE TABLE address (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  description VARCHAR(60)  NOT NULL  ,
  street VARCHAR(60)  NOT NULL  ,
  number VARCHAR(10)  NOT NULL  ,
  district VARCHAR(60)  NULL  ,
  fu VARCHAR(2)  NOT NULL  ,
  zipCode VARCHAR(20)  NULL  ,
  complement VARCHAR(60)  NULL  ,
  note VARCHAR(60)  NULL    ,
PRIMARY KEY(id));



CREATE TABLE provider (
  document VARCHAR(60)  NOT NULL  ,
  contact_id INTEGER UNSIGNED  NULL  ,
  address_id INTEGER UNSIGNED  NULL  ,
  name VARCHAR(255)  NOT NULL  ,
  fantasyName VARCHAR(255)  NULL  ,
  createdAt TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP   ,
PRIMARY KEY(document)  ,
INDEX provider_FKIndex1(address_id)  ,
INDEX provider_FKIndex2(contact_id),
  FOREIGN KEY(address_id)
    REFERENCES address(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(contact_id)
    REFERENCES contact(id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);






