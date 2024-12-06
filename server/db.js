const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'manager', // Replace with your MySQL root password
    database: 'ecowiserDb',
}).promise();

module.exports = db;
