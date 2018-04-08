CREATE DATABASE wine_db;

\c wine_db;

DROP TABLE wine;

CREATE TABLE wine (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  year INTEGER,
  grapes VARCHAR(255),
  country VARCHAR (255),
  region VARCHAR(255),
  description VARCHAR(255),
  picture VARCHAR (255),
  price INTEGER
);
