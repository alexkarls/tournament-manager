const express = require('express')
const db = require('../db')

const router = express.Router()

// Note table is named game since match is a reserved word in mySQL.

router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
            SELECT *
                FROM game
                    WHERE id = '${id}';
            `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.json(result)
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.get('/', (req, res) => {
  try {
    let sql = `
          SELECT *
              FROM game;
          `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.json(result)
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.post('/', (req, res) => {
  const { id, team1, team2, startDateTime, endDateTime } = req.body
  try {
    let sql = `
      INSERT INTO game(id, team_1, team_2, start_date_time, end_date_time)
        VALUES('${id}', '${team1}', '${team2}', '${startDateTime}', '${endDateTime}');
      `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.sendStatus(201)
    })
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error...')
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
      DELETE 
        FROM game
          WHERE id = '${id}';
      `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.sendStatus(200)
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

module.exports = router
