const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `${process.env.DB_INSTANCE_UNIX_SOCKET}`
  });


module.exports= connection ;