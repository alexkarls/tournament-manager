const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
        SELECT *
            FROM player
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

router.get('/team/:teamId', (req, res) => {
  const { teamId } = req.params
  try {
    let sql = `
        SELECT *
            FROM player
                WHERE team_id = '${teamId}';
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
  const { id, name, number, teamId } = req.body
  try {
    let sql = `
      INSERT INTO player(id, name, number, team_id)
        VALUES('${id}', '${name}', '${number}', '${teamId}');
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

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, number } = req.body
  try {
    let sql = `
    UPDATE player
      SET name = '${name}', number='${number}'
        WHERE id = '${id}';

    `
    db.query(sql, (error, result) => {
      if (error) {
        throw error
      }
      res.sendStatus(200)
    })
  } catch (error) {
    console.logg(error)
    res.sendStatus(500)
  }
})

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params
    let sql = `
    DELETE 
      FROM player
        WHERE id = ${id} 
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
