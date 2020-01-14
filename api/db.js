/*
 * Assumes there is a .env file with the host, user and password
 * The data in the .env file is passed as process.env.DB_HOST, DB_USER and DB_PASS
 * Assumes that the database 'tournament' exists
 * Assumes that the tables in this file does not exist...
 */


const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'tournament',
    connectTimeout: 2147483647
})

module.exports = db