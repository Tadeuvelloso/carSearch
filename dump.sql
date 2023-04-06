CREATE DATABASE carsearch;

CREATE TABLE cars (
	id SERIAL PRIMARY KEY,
	"model" VARCHAR(50) NOT NULL,
	"plate" TEXT NOT NULL UNIQUE,
	"category" TEXT NOT NULL,
	"year" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "color" TEXT NOT NULL
);