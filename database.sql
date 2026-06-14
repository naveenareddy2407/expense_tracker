CREATE DATABASE expense_tracker;

USE expense_tracker;

CREATE TABLE transactions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    descript VARCHAR(100)
    amount DECIMAL(10,2),
    type VARCHAR(20)
);