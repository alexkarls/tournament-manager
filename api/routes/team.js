const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
        SELECT *
            FROM team
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
            FROM team;
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
    const { id, name, country } = req.body
    let sql = `
    INSERT INTO team(id, name, country)
      VALUES('${id}', '${name}', '${country}');
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
  const { name, country } = req.body
  try {
    let sql = `
    UPDATE team
      SET name = '${name}', country= '${country}'
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

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    let sql = `
    DELETE 
      FROM team
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
