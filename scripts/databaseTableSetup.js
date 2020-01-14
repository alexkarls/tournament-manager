/*
 * Note that the script assumes there is a .env file with the host, user and password
 * The data in the .env file is passed as process.env.DB_HOST, DB_USER and DB_PASS
 * It assumes that the database 'tournament' exists
 * It assumes that the tables in this file does not exist...
 */

const mysql = require('mysql')

// Loads the .env file which is used to pass host, user and password to the environment (process.env)
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'tournament'
})

const createPlayerTable = () => {
    let sql = `CREATE TABLE player 
    (
        id VARCHAR(50) NOT NULL,
        name VARCHAR(50) NOT NULL,
        number int NOT NULL,
        team_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (teamId) References team(id) ON DELETE CASCADE,
        PRIMARY KEY(id)
    )`
    db.query(sql, (error, res) => {
        if (error) {
            throw error;
        }
        console.log(res)
    })
}
createPlayerTable()

const createGameTable = () => {
    let sql = `CREATE TABLE game
    (
        id VARCHAR(50) NOT NULL,
        team_1 VARCHAR(50) NOT NULL,
        team_2 VARCHAR(50) NOT NULL,
        start_date_time DATETIME NOT NULL,
        end_date_time DATETIME NOT NULL,
        FOREIGN KEY (team_1) References team(id) ON DELETE CASCADE,
        FOREIGN KEY (team_2) References team(id) ON DELETE CASCADE,
        PRIMARY KEY(id)
    );`
    db.query(sql, (error, res) => {
        if (error) {
            throw error;
        }
        console.log(res)
    })
}
createGameTable()

const createScoreTable = () => {
    let sql = `CREATE TABLE score
    (
        id VARCHAR(50) NOT NULL,
        match_id VARCHAR(50) NOT NULL,
        team_id VARCHAR(50) NOT NULL,
        player_id VARCHAR(50) NOT NULL,
        value int NOT NULL,
        date_time DATETIME NOT NULL,
        FOREIGN KEY (match_id) References game(id) ON DELETE CASCADE,
        FOREIGN KEY (team_id) References team(id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) References player(id) ON DELETE CASCADE
        PRIMARY KEY(id)
    );`
    db.query(sql, (error, res) => {
        if (error) {
            throw error;
        }
        console.log(res)
    })
}
createScoreTable()


const createTeamTable = () => {
    let sql = `CREATE TABLE team 
    (
        id VARCHAR(50) NOT NULL,
        name VARCHAR(50) NOT NULL,
        country VARCHAR(50) NOT NULL,
        PRIMARY KEY(id)
    )`
    db.query(sql, (error, res) => {
        if (error) {
            throw error;
        }
        console.log(res)
    })
}
createTeamTable();