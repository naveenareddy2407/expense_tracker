# Expense Tracker

## Overview

Expense Tracker is a simple web application that helps users manage their income and expenses. Users can add transactions, view their transaction history, and track their current balance.

## Features

* Add income and expense transactions
* Automatically calculate total balance
* Display total income and total expenses
* View transaction history
* User-friendly and responsive interface

## Technologies Used

* HTML5
* CSS3
* JavaScript
* MySQL (Database)

## Project Structure

```
ExpenseTracker/
│
├── index.html
├── style.css
├── script.js
├── database.sql
└── README.md
```

## Database Schema

Table: transactions

| Column Name | Data Type                         |
| ----------- | --------------------------------- |
| id          | INT (Primary Key, Auto Increment) |
| description | VARCHAR(100)                      |
| amount      | DECIMAL(10,2)                     |
| type        | VARCHAR(20)                       |

## How to Run

1. Download or clone the project.
2. Open `index.html` in a web browser.
3. Add income and expense transactions.
4. View updated balance and transaction history.

## Future Enhancements

* User authentication
* Monthly expense reports
* Data visualization using charts
* Export transactions to CSV/PDF

## Author

Naveena Marri

## Conclusion

This project demonstrates the implementation of a basic Expense Tracker using HTML, CSS, JavaScript, and MySQL. It helps users monitor their financial activities efficiently through a simple and interactive interface.
