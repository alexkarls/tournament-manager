const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/recent', (req, res) => {
  try {
    let sql = `
        SELECT * 
            FROM recent_scores;
        `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.json(result)
    })
  } catch (error) {
    res.sendStatus(500)
  }
})

router.get('/', (req, res) => {
  try {
    let sql = `
          SELECT *
              FROM score;
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

router.get('/:matchId', (req, res) => {
  const { matchId } = req.params
  try {
    let sql = `
          SELECT *
              FROM score
                  WHERE match_id = '${matchId}';
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
  try {
    const { id, matchId, teamId, playerId, value, dateTime } = req.body
    let sql = `
        INSERT INTO score(id, match_id, team_id, player_id, value, date_time)
          VALUES('${id}', '${matchId}', ${teamId}, '${playerId}', '${value}', '${dateTime}');
        `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.sendStatus(201)
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
        DELETE 
            FROM score
                WHERE id = '${id}'
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
