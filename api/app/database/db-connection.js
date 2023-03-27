const mysql = require('mysql2/promise');
const logger = require('../helpers/logger').logger.child({module: 'DatabaseConnection'});
const config = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
};
