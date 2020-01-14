const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/:matchId/:team1/:team2', (req, res) => {
  const { matchId, team1, team2 } = req.params
  try {
    let sql = `
        SELECT team_id, COUNT(value) as score_count
	        FROM score
		        WHERE match_id = '${matchId}'
		        AND team_id = '${team1}'
        UNION ALL
        SELECT team_id, COUNT(value)
	        FROM score
		        WHERE match_id = '${matchId}'
                AND team_id = '${team2}';
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

module.exports = router
