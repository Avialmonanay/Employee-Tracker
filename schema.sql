-- drop database if it exists and creates DB
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- uses the db
USE employee_db;


-- create the departments table
CREATE TABLE departments(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(50) NOT NULL
);

-- create the roles table
CREATE TABLE roles(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
role_name VARCHAR(30) NOT NULL,
role_salary INT NOT NULL,
department INT,
FOREIGN KEY (department)
REFERENCES departments(id)
ON DELETE SET NULL
);

-- create the employees table.
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager INT,
  role_ID INT,
  FOREIGN KEY (role_ID)
  REFERENCES roles(id)
  ON DELETE SET NULL
);