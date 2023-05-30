const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'communicare',
  });

// Database connection
connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
  console.log('Connected to database.');
})

module.exports = connection;